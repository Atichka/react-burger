import * as constants from "../../const";

export const GET_CONSTRUCTOR_REQUEST = 'GET_CONSTRUCTOR_REQUEST';
export const GET_CONSTRUCTOR_SUCCESS = 'GET_CONSTRUCTOR_SUCCESS';
export const GET_CONSTRUCTOR_FAILURE = 'GET_CONSTRUCTOR_FAILURE';

const url = constants.url;

export const getConstructor = () => (dispatch) => {
    dispatch({ type: GET_CONSTRUCTOR_REQUEST });
    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res);
        })
        .then(res => dispatch({ type: GET_CONSTRUCTOR_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_CONSTRUCTOR_FAILURE }));

}

