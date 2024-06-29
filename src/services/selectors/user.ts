import { RootState } from "../store";

export const getIsAuthChecked = (store: RootState) => store.userData.isAuthChecked;
export const getUser = (store: RootState) => store.userData.user