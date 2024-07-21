import {orderReducer, initialState} from './orderReducer'
import * as actions from '../actions/orderAction'

describe('order reducer', () => {
    test('should return the initial state', () => {
        expect(orderReducer(undefined, {})).toEqual(initialState)
    })
    it("should create SEND_ORDER_REQUEST", () => {
        let isLoading = true;
        expect(
            orderReducer(undefined, {
                type: actions.SEND_ORDER_REQUEST,
                payload: isLoading,
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it("should create SEND_ORDER_SUCCESS", () => {
        let isLoading = false;
        let number = {
            "_id": "668c3774119d45001b4f55e4",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Краторный space бургер",
            "createdAt": "2024-07-08T19:01:08.324Z",
            "updatedAt": "2024-07-08T19:01:08.891Z",
            "number": 45256
        };
        expect(
            orderReducer(undefined, {
                type: actions.SEND_ORDER_SUCCESS,
                isLoading: isLoading,
                payload: number,
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            order: number.number,
        });
    });
    it("should create SEND_ORDER_FAILED", () => {
        let isLoading = false;
        let error = "";
        expect(
            orderReducer(undefined, {
                type: actions.SEND_ORDER_FAILED,
                isLoading: isLoading,
                payload: error,
            })
        ).toEqual({
            ...initialState,
            isLoading: false,
            error: error,
        });
    });
    it("should create RESET_ORDER", () => {
        expect(
            orderReducer(undefined, {
                type: actions.RESET_ORDER,
            })
        ).toEqual({
            ...initialState,
        });
    });
    it("should create GET_ORDER_BY_NUMBER_SUCCESS", () => {
        let selectedOrder = {
            "success": true,
            "orders": [
                {
                    "_id": "668c3774119d45001b4f55e4",
                    "ingredients": [
                        "643d69a5c3f7b9001cfa093c",
                        "643d69a5c3f7b9001cfa0943",
                        "643d69a5c3f7b9001cfa093c"
                    ],
                    "status": "done",
                    "name": "Краторный space бургер",
                    "createdAt": "2024-07-08T19:01:08.324Z",
                    "updatedAt": "2024-07-08T19:01:08.891Z",
                    "number": 45256
                }
            ],
            "total": 45121,
            "totalToday": 105
        };
        expect(
            orderReducer(undefined, {
                type: actions.GET_ORDER_BY_NUMBER_SUCCESS,
                payload: selectedOrder,
            })
        ).toEqual({
            ...initialState,
            selectedOrder: selectedOrder,
        });
    });
})
