import {ordersProfileReducer, initialState} from './orderProfileReducer'
import * as actions from '../actions/orderProfileAction'

describe('order profile reducer', () => {
    test('should return the initial state', () => {
        expect(ordersProfileReducer(undefined, {})).toEqual(initialState)
    })
    it("should create WS order open in profile", () => {
        let wsConnected = true;
        let error = "";
        expect(
            ordersProfileReducer(undefined, {
                type: actions.WS_ORDER_PROFILE_OPEN,
                wsConnected: wsConnected,
                error: error,
            })
        ).toEqual({
            ...initialState,
            wsConnected: true,
            error: "",
        });
    });
    it("should create WS order close in profile", () => {
        let wsConnected = false;
        let error = "";
        expect(
            ordersProfileReducer(undefined, {
                type: actions.WS_ORDER_PROFILE_CLOSE,
                wsConnected: wsConnected,
                error: error,
            })
        ).toEqual({
            ...initialState,
            wsConnected: false,
            error: "",
        });
    });
    it("should create WS order with error in profile", () => {
        let wsConnected = false;
        let error = undefined;
        expect(
            ordersProfileReducer(undefined, {
                type: actions.WS_ORDER_PROFILE_ERROR,
                wsConnected: wsConnected,
                error: error,
            })
        ).toEqual({
            ...initialState,
            wsConnected: false,
            error: undefined,
        });
    });
    test("should create WS order with message in profile", () => {
        let orders = {
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
            ordersProfileReducer(undefined, {
                type: actions.WS_ORDER_PROFILE_MESSAGE,
                payload: orders,
            })
        ).toEqual({
            ...initialState,
            orders: orders,
        });
    });
})
