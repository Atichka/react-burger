export const WS_ORDER_PROFILE_CONNECT = 'WS_ORDER_PROFILE_CONNECT';
export const WS_ORDER_PROFILE_DISCONNECT = 'WS_ORDER_PROFILE_DISCONNECT';
export const WS_ORDER_PROFILE_CONNECTING = 'WS_ORDER_PROFILE_CONNECTING';
export const WS_ORDER_PROFILE_OPEN = 'WS_ORDER_PROFILE_OPEN';
export const WS_ORDER_PROFILE_CLOSE = 'WS_ORDER_PROFILE_CLOSE';
export const WS_ORDER_PROFILE_MESSAGE = 'WS_ORDER_PROFILE_MESSAGE';
export const WS_ORDER_PROFILE_ERROR = 'WS_ORDER_PROFILE_ERROR';

export interface IWsOrderProfileConnectAction {
    readonly type: typeof WS_ORDER_PROFILE_CONNECT;
    readonly payload: any;
}
export interface IWsOrderProfileDisconnectAction {
    readonly type: typeof WS_ORDER_PROFILE_DISCONNECT;
}

export interface IWsOrderProfileConnectingAction {
    readonly type: typeof WS_ORDER_PROFILE_CONNECTING;
}

export interface IWsOrderProfileOpenAction {
    readonly type: typeof WS_ORDER_PROFILE_OPEN;
}

export interface IWsOrderProfileCloseAction {
    readonly type: typeof WS_ORDER_PROFILE_CLOSE;
}

export interface IWsOrderProfileMessageAction {
    readonly type: typeof WS_ORDER_PROFILE_MESSAGE;
    readonly payload: {
        success: false;
        orders: [];
        total: 0;
        totalToday: 0;
    };
}

export interface IWsOrderProfileErrorAction {
    readonly type: typeof WS_ORDER_PROFILE_ERROR;
    readonly payload: string;
}

export type TOrderProfileActions =
    | IWsOrderProfileConnectAction
    | IWsOrderProfileDisconnectAction
    | IWsOrderProfileConnectingAction
    | IWsOrderProfileOpenAction
    | IWsOrderProfileCloseAction
    | IWsOrderProfileMessageAction
    | IWsOrderProfileErrorAction;

export const wsConnect = (url: string): IWsOrderProfileConnectAction => ({
    type: WS_ORDER_PROFILE_CONNECT,
    payload: url,
});

export const wsDisconnect = (): IWsOrderProfileDisconnectAction => ({
    type: WS_ORDER_PROFILE_DISCONNECT,
});
