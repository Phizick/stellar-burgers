import { combineReducers } from "redux";
import { getOrderData, getIngredientsData } from './reducers/index'

export const rootReducer = combineReducers({
    getOrderData,
    getIngredientsData
})