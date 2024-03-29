export const SEND_ORDER_REQUEST = 'SEND_ORDER_REQUEST';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';

export const sendOrder = (ingredients) => (dispatch) => {
    dispatch({ type: SEND_ORDER_REQUEST });
    fetch("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        body: JSON.stringify({
            "ingredients": ingredients
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })
        .then(({order}) => {
            dispatch({type: SEND_ORDER_SUCCESS, order})
        })
        .catch(err => dispatch({ type: SEND_ORDER_FAILED }));

}
