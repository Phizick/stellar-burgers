import {GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, SET_INGREDIENTS_MODAL, DELETE_INGREDIENTS_MODAL} from "../actions/ingredients";

const initialState = {
    ingredients: [],
    data: [],
    ingredientsProcessing: false,
    isLoad: false,
    modalData: {}
};

export const getIngredientsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredientsProcessing: true,
            };
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsProcessing: false,
                data: action.data,
                isLoad: true
            };
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsProcessing: false,
                data: state.data,
            };
        }
        case SET_INGREDIENTS_MODAL: {
            return {
                ...state,
                modalData: action.payload
            }
        }
        case DELETE_INGREDIENTS_MODAL: {
            return {
                ...state,
                modalData: initialState.modalData
            }
        }
        default:
            return state;
    }
};
