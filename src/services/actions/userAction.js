import {
    apiUserLogIn,
    apiUserRegIn,
    apiUserLogOut,
    getUserApi,
    apiUpdateUser
} from "../../utils/api";

export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";

export const LOG_IN_USER_REQUEST = "LOG_IN_USER_REQUEST";
export const LOG_IN_USER_FAILED = "LOG_IN_USER_FAILED";
export const LOG_IN_USER_SUCCESS = "LOG_IN_USER_SUCCESS";

export const REG_IN_USER_REQUEST = "REG_IN_USER_REQUEST";
export const REG_IN_USER_FAILED = "REG_IN_USER_FAILED";
export const REG_IN_USER_SUCCESS = "REG_IN_USER_SUCCESS";

export const LOG_OUT_USER_REQUEST = "LOG_OUT_USER_REQUEST";
export const LOG_OUT_USER_FAILED = "LOG_OUT_USER_FAILED";
export const LOG_OUT_USER_SUCCESS = "LOG_OUT_USER_SUCCESS";

export const POST_USER_DATA_REQUEST = "POST_USER_DATA_REQUEST";
export const POST_USER_DATA_FAILED = "POST_USER_DATA_FAILED";
export const POST_USER_DATA_SUCCESS = "POST_USER_DATA_SUCCESS";

export const logInUser = (email, password) => {
    return function (dispatch) {
        dispatch({ type: LOG_IN_USER_REQUEST });
        apiUserLogIn(email, password)
            .then((res) => {
                if (res && res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch(setUser(res.user));
                    dispatch(setAuthChecked(true));
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

export const regInUser = (email, name, password) => {
    return  function (dispatch) {
        dispatch({ type: REG_IN_USER_REQUEST });
        apiUserRegIn(email, name, password)
                .then((res) => {
                if (res && res.success) {
                    localStorage.setItem("accessToken", res.accessToken);
                    localStorage.setItem("refreshToken", res.refreshToken);
                    dispatch(setUser(res.user));
                    dispatch(setAuthChecked(true));
                    dispatch({
                        type: REG_IN_USER_SUCCESS,
                        userDataRegIn: res,
                    });
                } else {
                    dispatch({ type: REG_IN_USER_FAILED });
                }
            })
            .catch(() => {
                dispatch({ type: REG_IN_USER_FAILED });
            });
    };
}

export const getUser = () => {
    return (dispatch) => {
        return getUserApi().then((res) => {
            dispatch(setUser(res.user));
        });
    };
};

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const setAuthChecked = (value) => ({
    type: SET_AUTH_CHECKED,
    payload: value,
});

export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser())
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch(setUser(null));
                })
                .finally(() => dispatch(setAuthChecked(true)));
        } else {
            dispatch(setAuthChecked(true));
        }
    };
};

export const logOutUser = () => {
    return function (dispatch) {
        dispatch({ type: LOG_OUT_USER_REQUEST });
        apiUserLogOut()
            .then((res) => {
                if (res && res.success) {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch({ type: LOG_OUT_USER_SUCCESS });
                    dispatch({ type: SET_AUTH_CHECKED, payload: false });
                } else {
                    dispatch({ type: LOG_OUT_USER_FAILED });
                }
            })
            .catch(() => {
                dispatch({ type: LOG_OUT_USER_FAILED });
            });
    };
};

export const setUserData = (email, name, password) => {
    return function (dispatch) {
        dispatch({ type: POST_USER_DATA_REQUEST });
        apiUpdateUser(email, name, password)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: POST_USER_DATA_SUCCESS,
                        userData: res,
                    });
                } else {
                    dispatch({
                        type: POST_USER_DATA_FAILED,
                    });
                }
            })
            .catch((err) => {
                dispatch({ type: POST_USER_DATA_FAILED });
                console.log(err);
            });
    };
};
