import {userReducer, initialState} from './userReducer'
import * as actions from '../actions/userAction'
import {POST_USER_DATA_FAILED, POST_USER_DATA_SUCCESS, SET_AUTH_CHECKED} from "../actions/userAction";

describe('user reducer', () => {
    test('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(initialState)
    })
    it("should create LOG_IN_USER_REQUEST", () => {
        let logInUserRequest = true;
        expect(
            userReducer(undefined, {
                type: actions.LOG_IN_USER_REQUEST,
                logInUserRequest: logInUserRequest,
            })
        ).toEqual({
            ...initialState,
            logInUserRequest: true,
        });
    });
    it("should create LOG_IN_USER_SUCCESS", () => {
        let logInUserSuccess = true;
        expect(
            userReducer(undefined, {
                type: actions.LOG_IN_USER_SUCCESS,
                logInUserSuccess: logInUserSuccess,
            })
        ).toEqual({
            ...initialState,
            logInUserSuccess: true,
        });
    });
    it("should create LOG_IN_USER_FAILED", () => {
        let logInUserFailed = true;
        expect(
            userReducer(undefined, {
                type: actions.LOG_IN_USER_FAILED,
                logInUserFailed: logInUserFailed,
            })
        ).toEqual({
            ...initialState,
            logInUserFailed: true,
        });
    });
    it("should create REG_IN_USER_REQUEST", () => {
        let regInUserRequest = true;
        expect(
            userReducer(undefined, {
                type: actions.REG_IN_USER_REQUEST,
                regInUserRequest: regInUserRequest,
            })
        ).toEqual({
            ...initialState,
            regInUserRequest: true,
        });
    });
    it("should create REG_IN_USER_SUCCESS", () => {
        let regInUserSuccess = true;
        expect(
            userReducer(undefined, {
                type: actions.REG_IN_USER_SUCCESS,
                regInUserSuccess: regInUserSuccess,
            })
        ).toEqual({
            ...initialState,
            regInUserSuccess: true,
        });
    });
    it("should create REG_IN_USER_FAILED", () => {
        let regInUserFailed = true;
        expect(
            userReducer(undefined, {
                type: actions.REG_IN_USER_FAILED,
                regInUserFailed: regInUserFailed,
            })
        ).toEqual({
            ...initialState,
            regInUserFailed: true,
        });
    });
    it("should create LOG_OUT_USER_REQUEST", () => {
        let logOutUserRequest = true;
        expect(
            userReducer(undefined, {
                type: actions.LOG_OUT_USER_REQUEST,
                logOutUserRequest: logOutUserRequest,
            })
        ).toEqual({
            ...initialState,
            logOutUserRequest: true,
        });
    });
    it("should create LOG_OUT_USER_SUCCESS", () => {
        let regInUserRequest = false;
        let regInUserSuccess = false;
        let regInUserFailed = false;
        let logInUserRequest = false;
        let logInUserSuccess = false;
        let logInUserFailed = false;
        let logOutUserRequest = false;
        let logOutUserSuccess = true;
        let logOutUserFailed = false;
        expect(
            userReducer(undefined, {
                type: actions.LOG_OUT_USER_SUCCESS,
                regInUserRequest: regInUserRequest,
                regInUserSuccess: regInUserSuccess,
                regInUserFailed: regInUserFailed,
                logInUserRequest: logInUserRequest,
                logInUserSuccess: logInUserSuccess,
                logInUserFailed: logInUserFailed,
                logOutUserRequest: logOutUserRequest,
                logOutUserSuccess: logOutUserSuccess,
                logOutUserFailed: logOutUserFailed,
            })
        ).toEqual({
            ...initialState,
            regInUserRequest: false,
            regInUserSuccess: false,
            regInUserFailed: false,
            logInUserRequest: false,
            logInUserSuccess: false,
            logInUserFailed: false,
            logOutUserRequest: false,
            logOutUserSuccess: true,
            logOutUserFailed: false,
        });
    });
    it("should create LOG_OUT_USER_FAILED", () => {
        let logOutUserFailed = true;
        let logOutUserRequest = false;
        expect(
            userReducer(undefined, {
                type: actions.LOG_OUT_USER_FAILED,
                logOutUserFailed: logOutUserFailed,
                logOutUserRequest: logOutUserRequest,
            })
        ).toEqual({
            ...initialState,
            logOutUserFailed: true,
            logOutUserRequest: false,
        });
    });
    it("should create SET_AUTH_CHECKED", () => {
        let isAuthChecked = true;
        expect(
            userReducer(undefined, {
                type: actions.SET_AUTH_CHECKED,
                payload: isAuthChecked,
            })
        ).toEqual({
            ...initialState,
            isAuthChecked: true,
        });
    });
    it("should create SET_USER", () => {
        let user = {
            name: 'Atichka',
            email: 'email@mail.ru',
            password: 'password',
        };
        expect(
            userReducer(undefined, {
                type: actions.SET_USER,
                payload: user,
            })
        ).toEqual({
            ...initialState,
            user: user,
        });
    });
    it("should create POST_USER_DATA_REQUEST", () => {
        let postUserDataRequest = true;
        let postUserDataFailed = false;
        expect(
            userReducer(undefined, {
                type: actions.POST_USER_DATA_REQUEST,
                postUserDataRequest: postUserDataRequest,
                postUserDataFailed: postUserDataFailed,
            })
        ).toEqual({
            ...initialState,
            postUserDataRequest: true,
            postUserDataFailed: false
        });
    });
    it("should create POST_USER_DATA_SUCCESS", () => {
        let postUserDataRequest = false;
        let postUserDataSuccess = true;
        let postUserDataFailed = false;
        let userData = undefined;
        expect(
            userReducer(undefined, {
                type: actions.POST_USER_DATA_SUCCESS,
                postUserDataRequest: postUserDataRequest,
                postUserDataSuccess: postUserDataSuccess,
                postUserDataFailed: postUserDataFailed,
                user: userData,
            })
        ).toEqual({
            ...initialState,
            postUserDataRequest: false,
            postUserDataSuccess: true,
            postUserDataFailed: false,
            user: userData,
        });
    });
    it("should create POST_USER_DATA_FAILED", () => {
        let postUserDataFailed = true;
        let postUserDataRequest = false;
        let postUserDataSuccess = false;
        expect(
            userReducer(undefined, {
                type: actions.POST_USER_DATA_FAILED,
                postUserDataFailed: postUserDataFailed,
                postUserDataRequest: postUserDataRequest,
                postUserDataSuccess: postUserDataSuccess,
            })
        ).toEqual({
            ...initialState,
            postUserDataFailed: true,
            postUserDataRequest: false,
            postUserDataSuccess: false
        });
    });
})
