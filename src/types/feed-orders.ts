export enum WebSocketStatus {
    CONNECTING = 'CONNETING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export interface FeedRow {
    id: number;
    text: string;
}

export type FeedOrders = Array<FeedRow>;

export enum FeedOrdersActionType {
    DATA = 'data',
    INSERT = 'insert',
    DELETE = 'delete',
    UPDATE = 'update',
    MOVE = 'move'
}

export type Data = {
    type: FeedOrdersActionType.DATA,
    data: FeedOrders
}

export type Insert = {
    type: FeedOrdersActionType.INSERT,
    data: {
        rows: Array<FeedRow>,
        pos: number
    }
}

export type Update = {
    type: FeedOrdersActionType.UPDATE,
    data: FeedOrders
}

export type Delete = {
    type: FeedOrdersActionType.DELETE,
    data: Array<number>
}

export type Move = {
    type: FeedOrdersActionType.MOVE,
    data: Array<{ from: number, to: number }>
}

export type FeedOrdersAction = Insert | Data | Delete | Update | Move;
export type FeedOrdersActions = Array<FeedOrdersAction>;
