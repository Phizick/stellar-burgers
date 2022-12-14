import { combineReducers } from "redux";
import {burgerConstructorReducer} from './burgerConstructorReducer'
import {getIngredientsReducer} from './getIngredientsReducer'
import {getOrderData, getOrderReducer} from "./getOrderReducer";
import {getIngredientCard} from './getIngredientCardReducer'
import {userReducer} from "./userReducer";
import {wsReducer} from "./wsReducers";
import {modalReducer} from "./modalReducer";


export const rootReducer = combineReducers({
    ingredients: getIngredientsReducer,
    burgerIngredients: burgerConstructorReducer,
    ingredientDetail: getIngredientCard,
    order: getOrderData,
    user: userReducer,
    wsOrders: wsReducer,
    orderState: getOrderReducer,
    modalState: modalReducer
});