import { combineReducers } from "redux";
import {
    getOrderData,
    getIngredientsData,
    getIngredientCard,
    constructorSortedIngredients,
    orderTotalPrice
} from './reducers/index'

export const rootReducer = combineReducers({
    order: getOrderData,
    ingredients: getIngredientsData,
    ingredient: getIngredientCard,
    constructor: constructorSortedIngredients,
    price: orderTotalPrice
})