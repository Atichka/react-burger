import {LOG_IN_USER_FAILED, LOG_IN_USER_REQUEST, LOG_IN_USER_SUCCESS} from "../actions/userAction";

const initialState = {
    logInUserRequest: false,
    logInUserSuccess: false,
    logInUserFailed: false,
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
        default: {
            return state;
        }
    }
}
