import {BASE_URL} from "../../const";
import {request} from "../../utils/functions";
import {AppDispatch, AppThunk} from "../store";
import {TBurgerConstructor} from "../../utils/types";
const url = BASE_URL;

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';

export interface IGetIngredientsAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}
export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILURE;
    readonly payload: string;
}

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly payload: Array<TBurgerConstructor>;
}

export type TIngredientsActions =
    | IGetIngredientsAction
    | IGetIngredientsFailedAction
    | IGetIngredientsSuccessAction;

export const getIngredients = (): AppThunk => (dispatch: AppDispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    const options = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    }
    request<{data: Array<TBurgerConstructor>}>(url + '/ingredients', options)
        .then(res => { console.log(res); dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: res.data })} )
        .catch(err => dispatch({ type: GET_INGREDIENTS_FAILURE, payload: err.message }));

}

