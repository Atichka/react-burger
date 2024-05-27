import {GET_CONSTRUCTOR_FAILURE, GET_CONSTRUCTOR_REQUEST, GET_CONSTRUCTOR_SUCCESS} from "../actions/constructorAction";
import {INGREDIENT_ADD, INGREDIENT_DELETE, UPDATE_INGREDIENTS} from "../actions/constructorAction";

const initialState = {
    ingredients: [],
    stuffings: [],
    bun: null,
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
        case (INGREDIENT_ADD): {
            if (action.payload.type === "bun") {
                return { ...state, bun: action.payload };
            }
            return {
                ...state,
                stuffings: [...state.stuffings, action.payload],
            };
        }
        case UPDATE_INGREDIENTS:
            return {
                ...state,
                stuffings: action.ingredients,
            };
        case (INGREDIENT_DELETE): {
            return {
                ...state,
                stuffings: state.stuffings.filter((item) => item.nanoid !== action.payload),
            }
        }
        default: {
            return state;
        }
    }
}
