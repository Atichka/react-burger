import {
    GET_INGREDIENTS_FAILURE,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    TIngredientsActions
} from "../actions/ingredientsAction";
import {TBurgerConstructor} from "../../utils/types";

export type TIngredientState = {
    ingredients: Array<TBurgerConstructor>,
    isLoading: boolean,
    error: string | undefined,
}

export const initialState = {
    ingredients: [],
    isLoading: false,
    error: undefined,
}

export const ingredientsReducer = (state = initialState, action: TIngredientsActions): TIngredientState => {
    switch (action.type) {
        case (GET_INGREDIENTS_REQUEST): {
            return {...state, isLoading: true}
        }
        case (GET_INGREDIENTS_SUCCESS): {
            return {...state, ingredients: action.payload, isLoading: false}
        }
        case (GET_INGREDIENTS_FAILURE): {
            return {...state, isLoading: false, error: action.payload}
        }
        default: {
            return state;
        }
    }
}
