import {
    GET_INGREDIENTS,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAILED,
    SEND_ORDER,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_FAILED,
    CLEAR_CONSTRUCTOR,
    SET_CONSTRUCTOR,
    CHOICE_INGREDIENT,
    DELETE_INGREDIENT,
    GET_CONSTRUCTOR,
    CALC_PRICE,
} from '../actions/index'

const initialState = {
    ingredients: [],
    ingredientsProcessing: false,
    orderData: {},
    orderRequestProcessing: false,
    orderRequestFailed: false,
    constructorIngredients: [],
    constructorBun: null,
    selectedIngredient: {},
    price: '',
    data: []
};


export const getIngredientsData = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredientsProcessing: true
            }
        }
        case GET_INGREDIENTS_SUCCESS: {

            return {
                ...state,
                ingredientsProcessing: false,
                data: action.data,
            }

        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsProcessing: false,
                data: state.data
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


export const orderTotalPrice = (state = initialState, action) => {
    switch (action.type) {
        case CALC_PRICE: {
            return {
                ...state,
                price: action.price
            }
        }
        default: {
            return state;
        }
    }
};

export const getIngredientCard = (state = initialState, action) => {
    switch (action.type) {
        case CHOICE_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: {...state.selectedIngredient, ...action.selectedIngredient }
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: {}
            }
        }
        default:
            return state;
    }
}

