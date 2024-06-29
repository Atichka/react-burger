import { RootState } from "../store";

export const getOrderNumber = (store: RootState) => ({ orderNumber: store.order.order });
export const getOrderLoading = (state: RootState) => state.order.isLoading;
