import {
    RESET_ORDER,
    SEND_ORDER_FAILED,
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
    TOrderActions
} from "../actions/orderAction";
import {TOrder, TOrderNumber} from "../../utils/types";

export type TOrderState = {
    order: number | null,
    orderData: TOrder;
    isLoading: boolean,
    error: string | undefined,
}

const initialState = {
    order: null,
    orderData: {
        createdAt: "",
        ingredients: [],
        name: "",
        owner: "",
        status: "",
        updatedAt: "",
        number: 0,
        _id: "",
        __v: 0,
    },
    isLoading: false,
    error: undefined,
}

export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {
    switch (action.type) {
        case (SEND_ORDER_REQUEST): {
            return {...state, isLoading: true}
        }
        case (SEND_ORDER_SUCCESS): {
            return {...state, order: action.payload.number, isLoading: false}
        }
        case (SEND_ORDER_FAILED): {
            return {...state, isLoading: false, error: action.payload}
        }
        case RESET_ORDER: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
