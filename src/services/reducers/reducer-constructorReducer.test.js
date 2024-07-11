import {constructorReducer, initialState} from './constructorReducer'
import * as actions from '../actions/constructorAction'
import {INGREDIENT_DELETE} from "../actions/constructorAction";
// import {UPDATE_INGREDIENTS} from "../actions/constructorAction";

describe('constructor reducer', () => {
    test('should return the initial state', () => {
        expect(constructorReducer(undefined, {})).toEqual(initialState)
    })
    test("should return state add ingredient bun", () => {
        let ingredient = {
            image: 'https://code.s3.yandex.net/react/code/bun-01.png',
            price: 988,
            name: 'Флюоресцентная булка R2-D3',
            id: '643d69a5c3f7b9001cfa093d',
            type: 'bun',
            nanoid: 'Vc3GxBfencqfl7ukNrKjW'
        };
        expect(
            constructorReducer(undefined, {
                type: actions.INGREDIENT_ADD,
                payload: ingredient,
            })
        ).toEqual({
            ...initialState,
            bun: ingredient,
        });
    });
    test("should return state add ingredient stuffings", () => {
        let ingredient = {
            image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
            price: 80,
            name: 'Соус фирменный Space Sauce',
            id: '643d69a5c3f7b9001cfa0943',
            type: 'sauce',
            nanoid: 'wnYGDX_16x0NYHICmj_FK'
        };
        expect(
            constructorReducer(undefined, {
                type: actions.INGREDIENT_ADD,
                payload: ingredient,
            })
        ).toEqual({
            ...initialState,
            stuffings: [ingredient],
        });
    });
    test("should return state delete ingredient", () => {
        let id = "SjGhPKRtkq83nn1v7NtV6";
        expect(
            constructorReducer(undefined, {
                type: actions.INGREDIENT_DELETE,
                payload: id,
            })
        ).toEqual({
            ...initialState,
            stuffings: [],
        });
    });
})
