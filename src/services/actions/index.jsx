import { v4 as uuid4 } from 'uuid';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const CHOICE_INGREDIENT = 'CHOICE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const SET_DEFAULT_CONSTRUCTOR = 'SET_DEFAULT_CONSTRUCTOR';
export const DELETE_CONSTRUCTOR_INGREDIENT = 'DELETE_CONSTRUCTOR_INGREDIENT';
export const SORTED_CONSTRUCTOR = 'SORTED_CONSTRUCTOR';
export const REFRESH_CONSTRUCTOR_BUN ='REFRESH_CONSTRUCTOR_BUN'

const baseUrl = 'https://norma.nomoreparties.space/api/'
export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`error ${res}`)
};

function request(url, options) {
    return fetch(`${baseUrl}${url}`, options).then(checkResponse)
}

export const getIngredients = () => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENTS
        })
        request(`ingredients`)
            .then(res => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    data: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                    error: err.message
                })

            })
    }
};

export const setOrder = (ingredients) => {
    return dispatch => {
        dispatch({
            type: SEND_ORDER
        })
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({'ingredients': ingredients})
        }
        request(`orders`, requestOptions)
            .then(res => {
                dispatch({
                    type: SEND_ORDER_SUCCESS,
                    order: res.order.number
                })
                    .catch(err => {
                        dispatch({
                            type: SEND_ORDER_FAILED,
                            error: err.message
                        })

                    })
            })
    }
};

export const getIngredientDetails = (ingredient) => {
    return {
            type: CHOICE_INGREDIENT,
            data: ingredient
    }
};

export const clearIngredientDetails = () => {
    return {
            type: DELETE_INGREDIENT,
    }
};

export const addConstructorIngredient = (item) => {
    return {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        data: item,
        keyId: uuid4()
    }
}


