import apiUrl from '../../utils/constants'


export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const CHOICE_INGREDIENT = 'CHOICE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';
export const GET_CONSTRUCTOR = 'GET_CONSTRUCTOR'
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';
export const SET_CONSTRUCTOR = 'SET_CONSTRUCTOR';
export const GET_BURGER = 'GET_BURGER';
export const CALC_PRICE = 'CALC_PRICE';
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const SET_DEFAULT_BURGER = 'SET_DEFAULT_BURGER';
export const DELETE_CONSTRUCTOR_INGREDIENT = 'DELETE_CONSTRUCTOR_INGREDIENT';
export const SORTED_CONSTRUCTOR = 'SORTED_CONSTRUCTOR'


export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`error @{res}`)
}

export const getIngredients = () => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENTS
        })
        fetch(`https://norma.nomoreparties.space/api/ingredients`)
            .then(res => checkResponse(res))
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
}

export const setOrder = (ingredients) => {
    return dispatch => {
        dispatch({
            type: SEND_ORDER
        })
        const requestOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({'ingredients': ingredients})
        }
        fetch(`https://norma.nomoreparties.space/api/orders`, requestOptions)
            .then(res => checkResponse(res))
            .then(res => {
                dispatch({
                    type: SEND_ORDER_SUCCESS,
                    order: res.data
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

