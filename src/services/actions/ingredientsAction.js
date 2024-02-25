import * as constants from "../../const";

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';

const url = constants.url;

export const getIngredients = () => (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })
        .then(res => dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_INGREDIENTS_FAILURE }));

}

