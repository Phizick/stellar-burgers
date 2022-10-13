import { combineReducers } from "redux";
import {
     getIngredientCard
} from './reducers/index'
import {bunStateData, burgerConstructorReducer} from './reducers/burgerConstructorReducer'
import {getIngredientsReducer} from '../services/reducers/getIngredientsReducer'
import {getOrderData} from "./reducers/getOrderReducer";

export const rootReducer = combineReducers({
    ingredients: getIngredientsReducer,
    burgerIngredients: burgerConstructorReducer,
    ingredientDetail: getIngredientCard,
    order: getOrderData,
    bunData: bunStateData
})