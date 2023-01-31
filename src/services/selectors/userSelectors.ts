
import {TStateSelectors} from "../types/types";

export const getUserData = (state: TStateSelectors) => state.user;
export const getUserInfo = (state: TStateSelectors) => state.user.user;