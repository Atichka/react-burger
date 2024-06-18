import {BASE_URL} from "../../const";
import {fetchWithRefresh} from "../../utils/api";
const url = BASE_URL;

export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const RESET_ORDER = 'RESET_ORDER';

export const resetOrder = () => ({
    type: RESET_ORDER
});

export const sendOrder = (ingredients) => (dispatch) => {
    dispatch({ type: SEND_ORDER_REQUEST });
    const options = {
        method: 'POST',
        body: JSON.stringify({
            "ingredients": ingredients
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            authorization: localStorage.getItem("accessToken")
        }
    }
    fetchWithRefresh(url + '/orders', options)
        .then(({order}) => {
            dispatch({type: SEND_ORDER_SUCCESS, payload: order})
        })
        .catch(err => dispatch({ type: SEND_ORDER_FAILED }));

}
