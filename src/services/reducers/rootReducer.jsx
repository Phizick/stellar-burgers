import { combineReducers } from "redux";
import {bunStateData, burgerConstructorReducer} from './burgerConstructorReducer'
import {getIngredientsReducer} from './getIngredientsReducer'
import {getOrderData} from "./getOrderReducer";
import {getIngredientCard} from './getIngredientCardReducer'

export const rootReducer = combineReducers({
    ingredients: getIngredientsReducer,
    burgerIngredients: burgerConstructorReducer,
    ingredientDetail: getIngredientCard,
    order: getOrderData,
    bunData: bunStateData
})