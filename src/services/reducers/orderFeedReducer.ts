import {TOrders} from "../../utils/types";
import {
    TOrderFeedActions,
    WS_ORDER_CLOSE,
    WS_ORDER_ERROR,
    WS_ORDER_MESSAGE,
    WS_ORDER_OPEN
} from "../actions/orderFeedAction";

export type TFeedOrderState = {
    wsConnected: boolean;
    orders: TOrders | null;
    error: string;
}

export const initialState: TFeedOrderState = {
    wsConnected: false,
    orders: null,
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
