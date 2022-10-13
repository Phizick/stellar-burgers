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











export const getIngredientCard = (state = initialState, action) => {
    switch (action.type) {
        case CHOICE_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: {...state.selectedIngredient, ...action.data}
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

