import {ActionCreatorWithoutPayload, ActionCreatorWithPayload, Middleware} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {refreshToken} from "../../utils/api";

export type TWsActionTypes = {
    connect: ActionCreatorWithPayload<string>,
    disconnect: ActionCreatorWithoutPayload,
    sendMessage?: ActionCreatorWithPayload<any>,
    onConnecting: ActionCreatorWithoutPayload,
    onOpen: ActionCreatorWithoutPayload,
    onError: ActionCreatorWithPayload<string>,
    onClose: ActionCreatorWithoutPayload,
    onMessage: ActionCreatorWithPayload<any>,
};

const RECONNECT_PERIOD = 3000;

export const socketMiddleware = (
    wsActions: TWsActionTypes,
    withTokenRefresh: boolean = false,
): Middleware<{}, RootState> => {
    return (store) => {
        let socket: WebSocket | null = null;
        let reconnectTimer = 0;
        let url = "";
        let isConnected = false;
        const {
            connect,
            disconnect,
            sendMessage,
            onConnecting,
            onOpen,
            onError,
            onClose,
            onMessage,
        } = wsActions;
        const { dispatch } = store;
        return (next) => (action) => {
            if(connect.match(action)) {
                socket = new WebSocket(action.payload);
                url = action.payload;
                isConnected = true;
                dispatch(onConnecting());
                socket.onopen = () => {
                    dispatch(onOpen());
                }
                socket.onerror = () => {
                    dispatch(onError("Error"));
                }
                socket.onmessage = (event) => {
                    const { data } = event;
                    try {
                        const parsedData = JSON.parse(data);
                        if(withTokenRefresh && parsedData.message === "Invalid or missing token") {
                            refreshToken()
                                .then(refreshData => {
                                    const wssUrl = new URL(url);
                                    wssUrl.searchParams.set(
                                        "token",
                                        refreshData.accessToken.replace("Bearer ", "")
                                    );
                                    dispatch(connect(wssUrl.toString()));
                                })
                                .catch(e => {
                                    dispatch(onError((e as {message: string}).message))
                                })

                            dispatch(disconnect());
                            return;
                        }
                        dispatch(onMessage(parsedData));
                    } catch (e) {
                        dispatch(onError((e as {message: string}).message))
                    }
                }
                socket.onclose = () => {
                    if(isConnected) {
                        reconnectTimer = window.setTimeout(() => {
                            dispatch(connect(url));
                        }, RECONNECT_PERIOD);
                    }
                    dispatch(onClose());
                }
                if(socket && sendMessage?.match(action)) {
                    try {
                        socket.send(JSON.stringify(action.payload));
                    } catch (e) {
                        dispatch(onError((e as {message: string}).message))
                    }
                }
                if(socket && disconnect.match(action)) {
                    isConnected = false;
                    socket.close();
                    socket = null;
                }

            }

            next(action);
        }
    };
};
