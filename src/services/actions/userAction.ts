import {
    apiUserLogIn,
    apiUserRegIn,
    apiUserLogOut,
    getUserApi,
    apiUpdateUser
} from "../../utils/api";
import {TUser} from "../../utils/types";
import {AppDispatch, AppThunk} from "../store";

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

export interface ISetAuthCheckedAction {
    readonly type: typeof SET_AUTH_CHECKED;
    readonly payload: boolean
}

export interface ISetUserAction {
    readonly type: typeof SET_USER;
    readonly payload: Omit<TUser, 'password'> | null
}

export interface ILogInUserAction {
    readonly type: typeof LOG_IN_USER_REQUEST;
}
export interface ILogInUserFailedAction {
    readonly type: typeof LOG_IN_USER_FAILED;
}

export interface ILogInUserSuccessAction {
    readonly type: typeof LOG_IN_USER_SUCCESS;
    readonly payload: Omit<TUser, 'password'>;
}

export interface IRegInUserAction {
    readonly type: typeof REG_IN_USER_REQUEST;
}
export interface IRegInUserFailedAction {
    readonly type: typeof REG_IN_USER_FAILED;
}

export interface IRegInUserSuccessAction {
    readonly type: typeof REG_IN_USER_SUCCESS;
    readonly payload: Omit<TUser, 'password'>;
}

export interface ILogOutUserAction {
    readonly type: typeof LOG_OUT_USER_REQUEST;
}
export interface ILogOutUserFailedAction {
    readonly type: typeof LOG_OUT_USER_FAILED;
}

export interface ILogOutUserSuccessAction {
    readonly type: typeof LOG_OUT_USER_SUCCESS;
}

export interface IPostUserDataAction {
    readonly type: typeof POST_USER_DATA_REQUEST;
}
export interface IPostUserDataFailedAction {
    readonly type: typeof POST_USER_DATA_FAILED;
}

export interface IPostUserDataSuccessAction {
    readonly type: typeof POST_USER_DATA_SUCCESS;
    readonly userData: Omit<TUser, 'password'>;
}

export type TUserActions =
    | ISetAuthCheckedAction
    | ISetUserAction
    | ILogInUserAction
    | ILogInUserFailedAction
    | ILogInUserSuccessAction
    | IRegInUserAction
    | IRegInUserFailedAction
    | IRegInUserSuccessAction
    | ILogOutUserAction
    | ILogOutUserFailedAction
    | ILogOutUserSuccessAction
    | IPostUserDataAction
    | IPostUserDataFailedAction
    | IPostUserDataSuccessAction;

export const logInUser = (email: string, password: string): AppThunk => {
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
                        payload: res.user,
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

export const regInUser = (email: string, name: string, password: string): AppThunk => {
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
                        payload: res.user,
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

export const setUser = (user: Omit<TUser, 'password'> | null): ISetUserAction => ({
    type: SET_USER,
    payload: user,
});

export const setAuthChecked = (value: boolean): ISetAuthCheckedAction => ({
    type: SET_AUTH_CHECKED,
    payload: value,
});

export const checkUserAuth = (): AppThunk => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            getUserApi()
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

export const logOutUser = (): AppThunk => {
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

export const setUserData = (email: string, name: string, password: string): AppThunk => {
    return function (dispatch) {
        dispatch({ type: POST_USER_DATA_REQUEST });
        apiUpdateUser(email, name, password)
            .then((res) => {
                if (res && res.success) {
                    dispatch({
                        type: POST_USER_DATA_SUCCESS,
                        userData: res.user,
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
