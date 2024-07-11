import {ingredientsReducer, initialState} from './ingredientsReducer'
import * as actions from '../actions/ingredientsAction'

describe('ingredients reducer', () => {
    test('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(initialState)
    })
    it("should create GET_INGREDIENTS with isLoading true", () => {
        let isLoading = true;
        expect(
            ingredientsReducer(undefined, {
                type: actions.GET_INGREDIENTS_REQUEST,
                isLoading: isLoading,
            })
        ).toEqual({
            ...initialState,
            isLoading: true,
        });
    });
    it("should create GET_INGREDIENTS", () => {
        let isLoading = false;
        let ingredients = [{
            "_id(pin)":"643d69a5c3f7b9001cfa093c",
            "name(pin)":"Краторная булка N-200i",
            "type(pin)":"bun",
            "proteins(pin)":80,
            "fat(pin)":24,
            "carbohydrates(pin)":53,
            "calories(pin)":420,
            "price(pin)":1255,
            "image(pin)":"https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile(pin)":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large(pin)":"https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v(pin)":0
        }]
        expect(
            ingredientsReducer(undefined, {
                type: actions.GET_INGREDIENTS_SUCCESS,
                payload: ingredients,
                isLoading: isLoading,
            })
        ).toEqual({
            ...initialState,
            ingredients: ingredients,
            isLoading: false,
        });
    });
    it("should create GET_INGREDIENTS_FAILURE", () => {
        let isLoading = false;
        let ingredients = []
        expect(
            ingredientsReducer(undefined, {
                type: actions.GET_INGREDIENTS_FAILURE,
                isLoading: isLoading,
                error: undefined,
            })
        ).toEqual({
            ...initialState,
            isLoading: isLoading,
            ingredients: ingredients,
        });
    });
})
