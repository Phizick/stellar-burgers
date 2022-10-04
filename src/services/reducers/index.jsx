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
    orderData: {},
    orderRequestProcessing: false,
    orderRequestFailed: false,
    constructorIngredients: [],
    constructorBun: null
};

export const getIngredientsData = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                processing: true
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                processing: false,
                ingredients: action.ingredients
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                processing: false,
                ingredients: state.ingredients
            }
        }
        default:
            return state;
    }
};

export const getOrderData = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER: {
            return {
                ...state,
                orderRequestProcessing: true
            }
        }
        case SEND_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequestProcessing: false,
                orderData: action.order
            }
        }
        case SEND_ORDER_FAILED: {
            return {
                ...state,
                orderRequestProcessing: false,
                orderRequestFailed: true
            }
        }
        default: {
            return state;
        }
    }
};