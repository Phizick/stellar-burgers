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

