import {GET_CONSTRUCTOR_FAILURE, GET_CONSTRUCTOR_REQUEST, GET_CONSTRUCTOR_SUCCESS} from "../actions/constructorAction";

const initialState = {
    ingredients: [],
    addedIngredients: [],
    isLoading: false,
    error: undefined,
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case (GET_CONSTRUCTOR_REQUEST): {
            return {...state, isLoading: true}
        }
        case (GET_CONSTRUCTOR_SUCCESS): {
            return {...state, ingredients: action.payload, isLoading: false}
        }
        case (GET_CONSTRUCTOR_FAILURE): {
            return {...state, isLoading: false, error: action.payload}
        }
        default: {
            return state;
        }
    }
}
