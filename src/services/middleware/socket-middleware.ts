import { Middleware } from "redux";
import { RootState } from "../store";
import { refreshToken } from "../../utils/api";

export type WsActions = {
    wsConnect: string;
    wsDisconnect: string;
    wsConnecting: string;
    wsSendMessage?: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
}

export const socketMiddleware = (
    wsActions: WsActions,
): Middleware<{}, RootState> => {
    return (store) => {
        const {
            wsConnect,
            wsDisconnect,
            wsConnecting,
            wsSendMessage,
            onOpen,
            onError,
            onClose,
            onMessage,
        } = wsActions;
        const { dispatch } = store;
        let socket: WebSocket | null = null;
        let url: string;

        return (next) => (action) => {
            const { type, payload } = action as {type: string; payload: any};

            if(type === wsConnect) {
                socket = new WebSocket(payload);
                url = payload;
                dispatch({ type: wsConnecting });

                socket.onopen = () => {
                    dispatch({type: onOpen});
                };

                socket.onerror = () => {
                    dispatch({type: onError, payload: "Error"});
                };

                socket.onmessage = (event) => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    console.log(parsedData);
                    if (parsedData.message === "Invalid or missing token") {
                        refreshToken()
                            .then(res => {
                                let wssUrl = new URL(url);
                                wssUrl.searchParams.set("accessToken", res.accessToken.replace("Bearer ", ""));
                                dispatch({ type: wsConnect, payload: wssUrl.toString() });
                            })
                            .catch(err => {
                                dispatch({ type: onError, payload: (err as {message: string}).message })
                            })
                        dispatch({type: wsDisconnect});

                    } else {
                        dispatch({type: onMessage, payload: parsedData});
                    }
                };

                socket.onclose = () => {
                    dispatch({ type: onClose });
                };
            }

            if (socket) {
                if (wsSendMessage && type === wsSendMessage) {
                    socket.send(JSON.stringify(payload))
                }

                if (type === wsDisconnect) {
                    socket.close();
                    socket = null;
                }
            }

            next(action);
        };
    };
};
