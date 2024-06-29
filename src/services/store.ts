import {combineReducers} from "redux";
import {
    orderTableSlice,
    TInternalActions,
    wsClose,
    wsConnecting,
    wsError,
    wsMessage,
    wsOpen
} from "./order-table/slice";
import {configureStore} from "@reduxjs/toolkit";
import {socketMiddleware} from "./middleware/socket-middleware";
import {TExternalActions, wsConnect, wsDisconnect} from "./order-table/actions";
import {
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from "react-redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { TConstructorActions } from "./actions/constructorAction";
import { TIngredientsActions } from "./actions/ingredientsAction";
import { TOrderActions } from "./actions/orderAction";
import { TUserActions } from "./actions/userAction";
import { rootReducer } from "./reducers/rootReducer";

const orderTableMiddleware = socketMiddleware({
    connect: wsConnect,
    disconnect: wsDisconnect,
    onConnecting: wsConnecting,
    onOpen: wsOpen,
    onError: wsError,
    onClose: wsClose,
    onMessage: wsMessage,
});

// const orderTableMiddlewareProfile = socketMiddleware({
//     // connect: wsConnectProfile,
//     // disconnect: wsDisconnectProfile,
//     // onConnecting: wsConnecting,
//     // onOpen: wsOpen,
//     // onError: wsError,
//     // onClose: wsClose,
//     // onMessage: wsMessage,
// });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(orderTableMiddleware/*, orderTableMiddlewareProfile*/);
    }
});

type TApplicationActions = TExternalActions
    | TInternalActions
    | TConstructorActions
    | TIngredientsActions
    | TOrderActions
    | TUserActions;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    TApplicationActions
    >;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;

export const useDispatch = dispatchHook.withTypes<AppDispatch>();
export const useSelector = selectorHook.withTypes<RootState>();
