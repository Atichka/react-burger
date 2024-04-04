import {SEND_ORDER_FAILED, SEND_ORDER_REQUEST, SEND_ORDER_SUCCESS} from "../actions/orderAction";

const initialState = {
    order: null,
    isLoading: false,
    error: undefined,
}

export const orderReducer = (state = initialState, action) => {
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
        default: {
            return state;
        }
    }
}
