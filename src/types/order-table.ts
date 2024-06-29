export enum WebSocketStatus {
    CONNECTING = 'CONNETING...',
    ONLINE = 'ONLINE',
    OFFLINE = 'OFFLINE'
}

export interface TableRow {
    id: number;
    text: string;
}

export type OrderTable = Array<TableRow>;

export enum OrderTableActionType {
    DATA = 'data',
    INSERT = 'insert',
    DELETE = 'delete',
    UPDATE = 'update',
    MOVE = 'move'
}

export type Data = {
    type: OrderTableActionType.DATA,
    data: OrderTable
}

export type Insert = {
    type: OrderTableActionType.INSERT,
    data: {
        rows: Array<TableRow>,
        pos: number
    }
}

export type Update = {
    type: OrderTableActionType.UPDATE,
    data: OrderTable
}

export type Delete = {
    type: OrderTableActionType.DELETE,
    data: Array<number>
}

export type Move = {
    type: OrderTableActionType.MOVE,
    data: Array<{ from: number, to: number }>
}

export type OrderTableAction = Insert | Data | Delete | Update | Move;
export type OrderTableActions = Array<OrderTableAction>;
