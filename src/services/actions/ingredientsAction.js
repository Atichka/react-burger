import {BASE_URL} from "../../const";
import {request} from "../../utils/functions";
const url = BASE_URL;

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';

export const getIngredients = () => (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    request(url + '/ingredients')
        .then(res => dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_INGREDIENTS_FAILURE }));

}

