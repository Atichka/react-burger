import {Middleware, MiddlewareAPI} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "../store";
import {getUser} from "../selectors/user";

export const WS_ORDER_CONNECT = 'WS_ORDER_CONNECT';
export const WS_ORDER_DISCONNECT = 'WS_ORDER_DISCONNECT';
export const WS_ORDER_CONNECTING = 'WS_ORDER_CONNECTING';
export const WS_ORDER_OPEN = 'WS_ORDER_OPEN';
export const WS_ORDER_CLOSE = 'WS_ORDER_CLOSE';
export const WS_ORDER_MESSAGE = 'WS_ORDER_MESSAGE';
export const WS_ORDER_ERROR = 'WS_ORDER_ERROR';

export const WS_ORDER_PROFILE_CONNECT = 'WS_ORDER_PROFILE_CONNECT';
export const WS_ORDER_PROFILE_DISCONNECT = 'WS_ORDER_PROFILE_DISCONNECT';
export const WS_ORDER_PROFILE_CONNECTING = 'WS_ORDER_PROFILE_CONNECTING';
export const WS_ORDER_PROFILE_OPEN = 'WS_ORDER_PROFILE_OPEN';
export const WS_ORDER_PROFILE_CLOSE = 'WS_ORDER_PROFILE_CLOSE';
export const WS_ORDER_PROFILE_MESSAGE = 'WS_ORDER_PROFILE_MESSAGE';
export const WS_ORDER_PROFILE_ERROR = 'WS_ORDER_PROFILE_ERROR';

export type TFeedOrdersMiddleware = {
    wsConnect: typeof WS_ORDER_CONNECT;
    wsDisconnect: typeof WS_ORDER_DISCONNECT;
    wsConnecting: typeof WS_ORDER_CONNECTING;
    onOpen: typeof WS_ORDER_OPEN;
    onClose: typeof WS_ORDER_CLOSE;
    onMessage: typeof WS_ORDER_MESSAGE;
    onError: typeof WS_ORDER_ERROR;
};
export type TProfileOrdersMiddleware = {
    wsConnect: typeof WS_ORDER_PROFILE_CONNECT;
    wsDisconnect: typeof WS_ORDER_PROFILE_DISCONNECT;
    wsConnecting: typeof WS_ORDER_PROFILE_CONNECTING;
    onOpen: typeof WS_ORDER_PROFILE_OPEN;
    onClose: typeof WS_ORDER_PROFILE_CLOSE;
    onError: typeof WS_ORDER_PROFILE_ERROR;
    onMessage: typeof WS_ORDER_PROFILE_MESSAGE;
};

const RECONNECT_PERIOD = 3000;

export const socketMiddleware = (
    wsActions: TFeedOrdersMiddleware | TProfileOrdersMiddleware,
): Middleware<{}, RootState> => {
    return (store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;
        return (next) => (action) => {
            const { dispatch } = store;
            // @ts-ignore
            const { type } = action;
            const {
                wsConnect,
                wsDisconnect,
                wsConnecting,
                onOpen,
                onError,
                onClose,
                onMessage,
            } = wsActions;

            if(type === wsConnect) {
                // @ts-ignore
                socket = new WebSocket(action.payload);
                dispatch({ type: wsConnecting });
            }
            if (socket) {
                socket.onopen = () => {
                    dispatch({type: onOpen});
                };

                socket.onerror = () => {
                    dispatch({type: onError, payload: "Error"});
                };

                socket.onmessage = (event) => {
                    const {data} = event;
                    const parsedData = JSON.parse(data);
                    if (parsedData.message === "Invalid or missing token") {
                        // @ts-ignore
                        dispatch(getUser());
                    } else {
                        dispatch({type: onMessage, payload: parsedData});
                    }
                };
                socket.onclose = () => {
                    dispatch({ type: onClose });
                };

                if (action === wsDisconnect) {
                    socket.close();
                    socket = null;
                }
            };
            next(action);
        };
    };
};
