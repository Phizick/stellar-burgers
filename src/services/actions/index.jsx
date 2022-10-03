import apiUrl from '../../utils/constants'

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_DONE = 'GET_INGREDIENTS_DONE';
export const GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL';
export const CHOICE_INGREDIENT = 'CHOICE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export function getIngredientsData() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS
        })
        fetch(apiUrl)
            .then(res => {
                if (res.ok) {
                    dispatch({
                        type: GET_INGREDIENTS_DONE,
                        ingredients: res.data
                    })
                } else {
                    dispatch({
                        type: GET_INGREDIENTS_FAIL
                    })
                }
            })
            .catch(err => {
              console.error(err)
            })
    }
}

