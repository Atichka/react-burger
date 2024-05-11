import {
    LOG_IN_USER_FAILED,
    LOG_IN_USER_REQUEST,
    LOG_IN_USER_SUCCESS,
    REG_IN_USER_FAILED,
    REG_IN_USER_REQUEST,
    REG_IN_USER_SUCCESS,
    LOG_OUT_USER_FAILED,
    LOG_OUT_USER_REQUEST,
    LOG_OUT_USER_SUCCESS,
    SET_AUTH_CHECKED,
    SET_USER,
    POST_USER_DATA_REQUEST,
    POST_USER_DATA_FAILED,
    POST_USER_DATA_SUCCESS
} from "../actions/userAction";

const initialState = {
    logInUserRequest: false,
    logInUserSuccess: false,
    logInUserFailed: false,
    regInUserRequest: false,
    regInUserSuccess: false,
    regInUserFailed: false,
    logOutUserRequest: false,
    logOutUserSuccess: false,
    logOutUserFailed: false,
    user: null,
    isAuthChecked: false,
    postUserDataRequest: false,
    postUserDataSuccess: false,
    postUserDataFailed: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (LOG_IN_USER_REQUEST): {
            return {...state, logInUserRequest: true}
        }
        case (LOG_IN_USER_SUCCESS): {
            return {...state, logInUserSuccess: true}
        }
        case (LOG_IN_USER_FAILED): {
            return {...state, logInUserFailed: true}
        }
        case (REG_IN_USER_REQUEST): {
            return {...state, regInUserRequest: true}
        }
        case (REG_IN_USER_SUCCESS): {
            return {...state, regInUserSuccess: true}
        }
        case (REG_IN_USER_FAILED): {
            return {...state, regInUserFailed: true}
        }
        case LOG_OUT_USER_REQUEST: {
            return {
                ...state,
                logOutUserRequest: true,
            };
        }
        case LOG_OUT_USER_SUCCESS: {
            return {
                ...state,
                regInUserRequest: false,
                regInUserSuccess: false,
                regInUserFailed: false,
                logInUserRequest: false,
                logInUserSuccess: false,
                logInUserFailed: false,
                getUserDataRequest: false,
                getUserDataSuccess: false,
                getUserDataFailed: false,
                isAuthenticated: false,
                logOutUserRequest: false,
                logOutUserSuccess: true,
                logOutUserFailed: false,
            };
        }
        case LOG_OUT_USER_FAILED: {
            return {
                logOutUserFailed: true,
                logOutUserRequest: false,
            };
        }
        case SET_AUTH_CHECKED:
            return {
                ...state,
                isAuthChecked: action.payload
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case POST_USER_DATA_REQUEST: {
            return {
                ...state,
                postUserDataRequest: true,
                postUserDataFailed: false
            };
        }
        case POST_USER_DATA_SUCCESS: {
            return {
                ...state,
                postUserDataRequest: false,
                postUserDataSuccess: true,
                postUserDataFailed: false,
                userData: action.userData,
            }
        }
        case POST_USER_DATA_FAILED: {
            return {
                ...state,
                postUserDataFailed: true,
                postUserDataRequest: false,
                postUserDataSuccess: false
            }
        }
        default: {
            return state;
        }
    }
}
