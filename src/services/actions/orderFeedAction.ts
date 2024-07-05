import {TOrders} from "../../utils/types";

export const WS_ORDER_CONNECT = 'WS_ORDER_CONNECT';
export const WS_ORDER_DISCONNECT = 'WS_ORDER_DISCONNECT';
export const WS_ORDER_CONNECTING = 'WS_ORDER_CONNECTING';
export const WS_ORDER_OPEN = 'WS_ORDER_OPEN';
export const WS_ORDER_CLOSE = 'WS_ORDER_CLOSE';
export const WS_ORDER_MESSAGE = 'WS_ORDER_MESSAGE';
export const WS_ORDER_ERROR = 'WS_ORDER_ERROR';

export interface IWsOrderConnectAction {
    readonly type: typeof WS_ORDER_CONNECT;
    readonly payload: string;
}
export interface IWsOrderDisconnectAction {
    readonly type: typeof WS_ORDER_DISCONNECT;
}

export interface IWsOrderConnectingAction {
    readonly type: typeof WS_ORDER_CONNECTING;
}

export interface IWsOrderOpenAction {
    readonly type: typeof WS_ORDER_OPEN;
}

export interface IWsOrderCloseAction {
    readonly type: typeof WS_ORDER_CLOSE;
}

export interface IWsOrderMessageAction {
    readonly type: typeof WS_ORDER_MESSAGE;
    readonly payload: TOrders;
}

export interface IWsOrderErrorAction {
    readonly type: typeof WS_ORDER_ERROR;
    readonly payload: string;
}

export type TOrderFeedActions =
    | IWsOrderConnectAction
    | IWsOrderDisconnectAction
    | IWsOrderConnectingAction
    | IWsOrderOpenAction
    | IWsOrderCloseAction
    | IWsOrderMessageAction
    | IWsOrderErrorAction;

export const wsConnect = (url: string): IWsOrderConnectAction => ({
    type: WS_ORDER_CONNECT,
    payload: url,
});

export const wsDisconnect = (): IWsOrderDisconnectAction => ({
    type: WS_ORDER_DISCONNECT,
});
