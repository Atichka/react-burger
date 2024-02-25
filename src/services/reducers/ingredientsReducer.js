import {GET_INGREDIENTS_FAILURE, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS} from "../actions/ingredientsAction";

const initialState = {
    ingredients: [],
    addedIngredients: [],
    isLoading: false,
    error: undefined,
}

export const ingredientsReducer = (state = initialState, action) => {
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
