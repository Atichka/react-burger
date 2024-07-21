import {
    TConstructorActions
} from "../actions/constructorAction";
import {INGREDIENT_ADD, INGREDIENT_DELETE} from "../actions/constructorAction";
import {TBurgerConstructor} from "../../utils/types";

export type TConstructorState = {
    stuffings: Array<TBurgerConstructor>,
    bun?: TBurgerConstructor | null,
}

export const initialState: TConstructorState = {
    stuffings: [],
    bun: null,
}

export const constructorReducer = (state = initialState, action: TConstructorActions): TConstructorState => {
    switch (action.type) {
        case (INGREDIENT_ADD): {
            if (action.payload.type === "bun") {
                return { ...state, bun: action.payload };
            }
            return {
                ...state,
                stuffings: [...state.stuffings, action.payload],
            };
        }
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
