import {ADD_INGREDIENT, REMOVE_INGREDIENT} from "../actions/detailsAction";

const initialState = {
    ingredients: [],
    addedIngredient: null,
    isLoading: false,
    error: undefined,
}

export const currIngredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ADD_INGREDIENT): {
            return {...state, addedIngredient: action.payload}
        }
        case (REMOVE_INGREDIENT): {
            return {...state, addedIngredient: null}
        }
        default: {
            return state;
        }
    }
}
