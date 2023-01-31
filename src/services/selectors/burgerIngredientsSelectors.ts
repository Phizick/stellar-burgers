
import {TStateSelectors} from "../types/types";


export const getBurgerIngredients = (state: TStateSelectors) => state.burgerIngredients.ingredients;
export const getBunData = (state: TStateSelectors) => state.burgerIngredients.bun;
export const getSelectedIngredient = (state: TStateSelectors) => state.burgerIngredients;