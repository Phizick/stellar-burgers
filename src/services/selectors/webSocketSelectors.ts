import {TStateSelectors} from "../types/types";

export const getWsData = (state: TStateSelectors) => state.wsOrders;