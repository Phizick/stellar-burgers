import { combineReducers } from "redux";
import {getOrderData, getIngredientsData, getIngredientCard} from './reducers/index'

export const rootReducer = combineReducers({
    order: getOrderData,
    ingredients: getIngredientsData,
    ingredient: getIngredientCard
})