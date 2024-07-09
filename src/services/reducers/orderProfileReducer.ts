import {TOrders} from "../../utils/types";
import {
    TOrderProfileActions,
    WS_ORDER_PROFILE_CLOSE,
    WS_ORDER_PROFILE_ERROR, WS_ORDER_PROFILE_MESSAGE,
    WS_ORDER_PROFILE_OPEN
} from "../actions/orderProfileAction";

export type TOrderProfileState = {
    wsConnected: boolean;
    orders: TOrders | null;
    error: string;
}

const initialState: TOrderProfileState = {
    wsConnected: false,
    orders: null,
    error: "",
}

export const ordersProfileReducer = (
    state = initialState,
    action: TOrderProfileActions,
): TOrderProfileState => {
    switch (action.type) {
        case WS_ORDER_PROFILE_OPEN:
            return {
                ...state,
                wsConnected: true,
                error: "",
            };
        case WS_ORDER_PROFILE_CLOSE:
            return {
                ...state,
                wsConnected: false,
                error: "",
            };
        case WS_ORDER_PROFILE_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };
        case WS_ORDER_PROFILE_MESSAGE:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
};
