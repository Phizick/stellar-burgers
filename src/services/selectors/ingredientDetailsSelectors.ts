import {TStateSelectors} from "../types/types";

export const getIngredient = (state: TStateSelectors) => state.ingredientDetail.selectedIngredient;