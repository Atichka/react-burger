import { RootState } from "../store";

export const getStuffings = (state: RootState) => state.currBurger.stuffings;
export const getBun = (state: RootState) => state.currBurger.bun;
export const getLoading = (state: RootState) => state.order.isLoading;