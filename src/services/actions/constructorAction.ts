import { nanoid } from 'nanoid';
import {TBurgerConstructor} from "../../utils/types";

export const GET_CONSTRUCTOR_REQUEST = 'GET_CONSTRUCTOR_REQUEST';
export const GET_CONSTRUCTOR_SUCCESS = 'GET_CONSTRUCTOR_SUCCESS';
export const GET_CONSTRUCTOR_FAILURE = 'GET_CONSTRUCTOR_FAILURE';
export const INGREDIENT_ADD = 'INGREDIENT_ADD';
export const INGREDIENT_DELETE = 'INGREDIENT_DELETE';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';

export interface IAddIngredient {
    readonly type: typeof INGREDIENT_ADD;
    readonly payload: TBurgerConstructor;
}

export interface IDeleteIngredient {
    readonly type: typeof INGREDIENT_DELETE;
    readonly payload: string;
}

export interface IUpdateIngredient {
    readonly type: typeof UPDATE_INGREDIENTS;
    readonly ingredients: TBurgerConstructor[]
}

export type TConstructorActions =
    | IAddIngredient
    | IDeleteIngredient
    | IUpdateIngredient;

export const addToConstructor = (ingredient: TBurgerConstructor): IAddIngredient => {
    return {
        type: INGREDIENT_ADD,
        payload: { ...ingredient, id: ingredient.id, nanoid: nanoid() }
    }
}

export const updateIngredients = (ingredients: TBurgerConstructor[]): IUpdateIngredient => ({
    type: UPDATE_INGREDIENTS, ingredients
});

