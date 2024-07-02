import {configureStore} from "@reduxjs/toolkit";
import {socketMiddleware} from "./middleware/socket-middleware";
import {TOrderFeedActions, wsConnect, wsDisconnect} from "./actions/orderFeedAction";
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

export const WS_ORDER_CONNECT = 'WS_ORDER_CONNECT';
export const WS_ORDER_DISCONNECT = 'WS_ORDER_DISCONNECT';
export const WS_ORDER_CONNECTING = 'WS_ORDER_CONNECTING';
export const WS_ORDER_OPEN = 'WS_ORDER_OPEN';
export const WS_ORDER_CLOSE = 'WS_ORDER_CLOSE';
export const WS_ORDER_MESSAGE = 'WS_ORDER_MESSAGE';
export const WS_ORDER_ERROR = 'WS_ORDER_ERROR';

const feedOrdersMiddleware = socketMiddleware({
    wsConnect: WS_ORDER_CONNECT,
    wsDisconnect: WS_ORDER_DISCONNECT,
    wsConnecting: WS_ORDER_CONNECTING,
    onOpen: WS_ORDER_OPEN,
    onClose: WS_ORDER_CLOSE,
    onMessage: WS_ORDER_MESSAGE,
    onError: WS_ORDER_ERROR,
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
        return getDefaultMiddleware().concat(feedOrdersMiddleware/*, orderOrdersMiddlewareProfile*/);
    }
});

type TApplicationActions = TOrderFeedActions
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
