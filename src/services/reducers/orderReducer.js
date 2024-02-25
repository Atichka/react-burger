// import {ADD_INGREDIENT} from "../actions/ingredients";

const initialState = {
    ingredients: [],
    addedIngredients: [],
    isLoading: false,
    error: undefined,
}

export const orderReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case (ADD_INGREDIENT): {
    //         return {...state, addedIngredients: [...state.addedIngredients, action.payload]}
    //     }
    //     default: {
            return state;
    //     }
    // }
}
