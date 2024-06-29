import {OrderTable, OrderTableActions, WebSocketStatus} from "../../types/order-table";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {orderTableUpdate} from "./order-table-update";

export type TOrderTableState = {
    status: WebSocketStatus;
    table: OrderTable;
    connectionError: string | null;
}

const initialState: TOrderTableState = {
    status: WebSocketStatus.OFFLINE,
    table: [],
    connectionError: null,
}

export const orderTableSlice = createSlice({
    name: "orderTable",
    initialState,
    reducers: {
        wsConnecting: (state) => {
            state.status = WebSocketStatus.CONNECTING;
        },
        wsOpen: (state) => {
            state.status = WebSocketStatus.ONLINE;
            state.connectionError = null;
        },
        wsClose: (state) => {
            state.status = WebSocketStatus.OFFLINE;
        },
        wsError: (state, action: PayloadAction<string>) => {
            state.connectionError = action.payload;
        },
        wsMessage: (state, action: PayloadAction<OrderTableActions>) => {
            state.table = orderTableUpdate(state.table, action.payload);
        },
    },
    selectors: {
        getOrderTable: state => state.table,
        getWebSocketStatus: state => state.status,
    }
})

export const {wsConnecting, wsOpen, wsClose, wsError, wsMessage} = orderTableSlice.actions;
export const {getOrderTable, getWebSocketStatus} = orderTableSlice.selectors;

type TActionCreators = typeof orderTableSlice.actions;
export type TInternalActions = ReturnType<TActionCreators[keyof TActionCreators]>;
