import {feedOrdersReducer, initialState} from './orderFeedReducer'
import * as actions from '../actions/orderFeedAction'
import {WS_ORDER_CLOSE, WS_ORDER_ERROR, WS_ORDER_MESSAGE, WS_ORDER_OPEN} from "../actions/orderFeedAction";

describe('order feed reducer', () => {
    test('should return the initial state', () => {
        expect(feedOrdersReducer(undefined, {})).toEqual(initialState)
    })
    it("should create WS order open", () => {
        let wsConnected = true;
        let error = "";
        expect(
            feedOrdersReducer(undefined, {
                type: actions.WS_ORDER_OPEN,
                wsConnected: wsConnected,
                error: error,
            })
        ).toEqual({
            ...initialState,
            wsConnected: true,
            error: "",
        });
    });
    it("should create WS order close", () => {
        let wsConnected = false;
        let error = "";
        expect(
            feedOrdersReducer(undefined, {
                type: actions.WS_ORDER_CLOSE,
                wsConnected: wsConnected,
                error: error,
            })
        ).toEqual({
            ...initialState,
            wsConnected: false,
            error: "",
        });
    });
    it("should create WS order with error", () => {
        let wsConnected = false;
        let error = undefined;
        expect(
            feedOrdersReducer(undefined, {
                type: actions.WS_ORDER_ERROR,
                wsConnected: wsConnected,
                error: error,
            })
        ).toEqual({
            ...initialState,
            wsConnected: false,
            error: undefined,
        });
    });
    test("should create WS order with message", () => {
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
            feedOrdersReducer(undefined, {
                type: actions.WS_ORDER_MESSAGE,
                payload: orders,
            })
        ).toEqual({
            ...initialState,
            orders: orders,
        });
    });
})
