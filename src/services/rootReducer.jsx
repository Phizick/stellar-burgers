import { combineReducers } from "redux";
import {
    getIngredientsData, getIngredientCard, getOrderData
} from './reducers/index'
import {burgerConstructorData} from './reducers/burgerIngredients'

export const rootReducer = combineReducers({
    ingredients: getIngredientsData,
    burgerIngredients: burgerConstructorData,
    ingredientDetail: getIngredientCard,
    order: getOrderData
})