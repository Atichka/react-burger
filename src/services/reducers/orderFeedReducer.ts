import {FeedOrders, FeedOrdersActions, WebSocketStatus} from "../../types/feed-orders";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TOrders} from "../../utils/types";
import {TOrderFeedActions} from "../actions/orderFeedAction";

export const WS_ORDER_OPEN = 'WS_ORDER_OPEN';
export const WS_ORDER_MESSAGE = 'WS_ORDER_MESSAGE';
export const WS_ORDER_CLOSE = 'WS_ORDER_CLOSE';
export const WS_ORDER_ERROR = 'WS_ORDER_ERROR';

export type TFeedOrderState = {
    wsConnected: boolean;
    orders: TOrders;
    error: string;
}

const initialState: TFeedOrderState = {
    wsConnected: false,
    orders: {
        success: true,
        orders: [],
        total: 0,
        totalToday: 0,
    },
    error: "",
}

export const feedOrdersReducer = (
    state = initialState,
    action: TOrderFeedActions,
): TFeedOrderState => {
    switch (action.type) {
        case WS_ORDER_OPEN:
            return {
                ...state,
                wsConnected: true,
                error: "",
            };
        case WS_ORDER_CLOSE:
            return {
                ...state,
                wsConnected: false,
                error: "",
            };
        case WS_ORDER_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };
        case WS_ORDER_MESSAGE:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
};
