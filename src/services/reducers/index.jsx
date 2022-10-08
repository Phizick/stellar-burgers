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
    CALC_PRICE
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
    price: ''
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
                ingredients: action.ingredients
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsProcessing: false,
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

export const constructorSortedIngredients = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONSTRUCTOR: {
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients, action.constructorIngredients]
            }
        }
        case SET_CONSTRUCTOR: {
            const sortedConstructor = [...state.constructorIngredients];
            sortedConstructor.splice(action, 0, sortedConstructor.splice(action, 1)[0])
            return {
                ...state,
                constructorIngredients: sortedConstructor
            }
        }
        case CLEAR_CONSTRUCTOR: {
            const itemForClear = state.constructorIngredients.find(item => item._id === action._id)
            const itemForClearIndex = state.constructorIngredients.indexOf(itemForClear)
            state.constructorIngredients.splice(itemForClearIndex, 1)
            if (!itemForClear) {
                return state
            }
            return {
                ...state,
                constructorIngredients: [...state.constructorIngredients]
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

export const


export const getIngredientCard = (state = initialState, action) => {
    switch (action.type) {
        case CHOICE_INGREDIENT: {
            return {
                ...state,
                ingredient: {...state.ingredient, ...action.data }
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredient: {}
            }
        }
        default:
            return state;
    }
}

