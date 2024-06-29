import {BASE_URL} from "../../const";
import {fetchWithRefresh} from "../../utils/api";
import { TOrder } from "../../utils/types";
import { AppDispatch } from "../store";
const url = BASE_URL;

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const RESET_ORDER = 'RESET_ORDER';

export interface ISendOrderAction {
    readonly type: typeof SEND_ORDER_REQUEST;
}
export interface ISendOrderFailedAction {
    readonly type: typeof SEND_ORDER_FAILED;
    readonly payload: string;
}

export interface ISendOrderSuccessAction {
    readonly type: typeof SEND_ORDER_SUCCESS;
    readonly payload: TOrder;
}

export interface IResetOrderAction {
    readonly type: typeof RESET_ORDER;
}

export type TOrderActions =
    | ISendOrderAction
    | ISendOrderFailedAction
    | ISendOrderSuccessAction
    | IResetOrderAction;

export const resetOrder = (): IResetOrderAction => ({
    type: RESET_ORDER
});

export const sendOrder = (ingredients: Array<string>) => (dispatch: AppDispatch) => {
    dispatch({ type: SEND_ORDER_REQUEST });
    const options = {
        method: 'POST',
        body: JSON.stringify({
            "ingredients": ingredients
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            authorization: localStorage.getItem("accessToken")
        } as HeadersInit
    }
    fetchWithRefresh<{order: TOrder}>(url + '/orders', options)
        .then(({order}) => {
            dispatch({type: SEND_ORDER_SUCCESS, payload: order})
        })
        .catch(err => dispatch({ type: SEND_ORDER_FAILED, payload: err.message }));

}
