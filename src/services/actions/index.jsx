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
export const FILL_CONSTRUCTOR = 'FILL_CONSTRUCTOR';
export const SORT_CONSTRUCTOR = 'SORT_CONSTRUCTOR';
export const CALC_PRICE = 'CALC_PRICE'

const checkResponse = (res) => {
    if (!res.ok) {
        throw new Error('connection failed')
    }
    return res.json();
}


export const getIngredients = () => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENTS
        })
        fetch(`${apiUrl}/ingredients`)
            .then(res => checkResponse(res))
            .then(res => console.log(res))
            .then(json => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: json.data
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

export const sendOrder = () => {
    return dispatch => {
        dispatch({
            type: SEND_ORDER
        })
        const requestOptions = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({'ingredients': []})
        }
        fetch(`${apiUrl}/orders`, requestOptions)
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

export const getIngredient = (ingredient) => {
    return dispatch => {
        dispatch({
            type: CHOICE_INGREDIENT,
            data: ingredient
        })
    }
}

export const deleteIngredient = () => {
    return dispatch => {
        dispatch({
            type: DELETE_INGREDIENT
        })
    }
};

