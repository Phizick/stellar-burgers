import apiUrl from '../../utils/constants'

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const CHOICE_INGREDIENT = 'CHOICE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SEND_ORDER = 'SEND_ORDER';
export const SEND_ORDER_SUCCESS = 'SEND_ORDER_SUCCESS';
export const SEND_ORDER_FAILED = 'SEND_ORDER_FAILED';



export const getIngredientsData = () => {
    return dispatch => {
        dispatch({
            type: GET_INGREDIENTS
        })
        fetch(`${apiUrl}/ingredients`)
            .then(res => {
                if (res.ok) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        ingredients: res.data
                    })
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAILED
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                    error: err.message
                })
                console.error(err)
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
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ 'ingredients': anyListOrder})
        }
        fetch(`${apiUrl}/orders`, requestOptions)
            .then(res => {
                if (res.ok) {
                    dispatch({
                        type: SEND_ORDER_SUCCESS,
                        order: res.data
                    })
                } else {
                    dispatch({
                        type: SEND_ORDER_FAILED
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: SEND_ORDER_FAILED,
                    error: err.message
                })
                console.error(err)
            })
    }

}

