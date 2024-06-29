import {createAction} from "@reduxjs/toolkit";

export const wsConnect = createAction<string, "ORDER_TABLE_ACTION">("ORDER_TABLE_ACTION");
export const wsDisconnect = createAction("ORDER_TABLE_DISCONNECT");

export type TExternalActions = ReturnType<typeof wsConnect> | ReturnType<typeof wsDisconnect>;
