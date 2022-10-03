import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SEND_ORDER,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_FAILED
} from '../actions/index'

const initialState = {
    ingredients: [],
    order: {},
    orderRequest: false,
    orderFailed: false,
    constructorIngredients: [],
    constructorBun: null
};
