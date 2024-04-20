import {apiUserLogIn} from "../../utils/api";

export const LOG_IN_USER_REQUEST = "LOG_IN_USER_REQUEST";
export const LOG_IN_USER_FAILED = "LOG_IN_USER_FAILED";
export const LOG_IN_USER_SUCCESS = "LOG_IN_USER_SUCCESS";

export const logInUser = (email, password) => {
    return function (dispatch) {
        dispatch({ type: LOG_IN_USER_REQUEST });
        apiUserLogIn(email, password)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: LOG_IN_USER_SUCCESS,
                        userDataLogIn: res,
                    });
                } else {
                    dispatch({ type: LOG_IN_USER_FAILED });
                }
            })
            .catch(() => {
                dispatch({ type: LOG_IN_USER_FAILED });
            });
    };
};
