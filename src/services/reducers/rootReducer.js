import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";
import {currIngredientReducer} from "./currIngredientReducer";
import {constructorReducer} from "./constructorReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    currIngredient: currIngredientReducer,
    currBurger: constructorReducer,
    userData: userReducer,
});
