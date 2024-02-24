import {combineReducers} from "redux";
import {ingredientsReducer} from "./ingredientsReducer";
import {orderReducer} from "./orderReducer";
import {currIngredientReducer} from "./currIngredientReducer";
import {constructorReducer} from "./constructorReducer";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    order: orderReducer,
    currIngredient: currIngredientReducer,
    currBurger: constructorReducer,
});
