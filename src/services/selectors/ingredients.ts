import { RootState } from "../store";

export const getIngredients = (state: RootState) => state.ingredients.ingredients;
export const getIngredientsLoading = (state: RootState) => state.ingredients.isLoading;