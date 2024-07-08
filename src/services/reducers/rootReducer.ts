import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";
import {constructorReducer} from "./constructorReducer";
import {userReducer} from "./userReducer";
import {feedOrdersReducer} from "./orderFeedReducer";
import { ordersProfileReducer } from "./orderProfileReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    currBurger: constructorReducer,
    userData: userReducer,
    feedOrders: feedOrdersReducer,
    ordersProfile: ordersProfileReducer,
});
