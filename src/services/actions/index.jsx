import { v4 as uuid4 } from "uuid";
import {getCookie} from "../../utils/cookieFunc";
import {GET_USER, GET_USER_FAILED, GET_USER_SUCCESS} from "./user";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const CHOICE_INGREDIENT = "CHOICE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SEND_ORDER = "SEND_ORDER";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";
export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const SORTED_CONSTRUCTOR = "SORTED_CONSTRUCTOR";
export const ADD_CONSTRUCTOR_BUN = "ADD_CONSTRUCTOR_BUN";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";
export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED'


const baseUrl = "https://norma.nomoreparties.space/api/";

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`error ${res}`);
}

export function request(url, options) {
    return fetch(`${baseUrl}${url}`, options).then(checkResponse);
}

export const getIngredients = () => {
    return (dispatch) => {
        dispatch({
            type: GET_INGREDIENTS,
        });
        request(`ingredients`)
            .then((res) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    data: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                    error: err.message,
                });
            });
    };
};

export const setOrder = (ingredients) => {
    return (dispatch) => {
        dispatch({
            type: SEND_ORDER,
        });
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + getCookie('accessToken')},
            body: JSON.stringify({ ingredients: ingredients }),
        };
        request(`orders`, requestOptions)
            .then((res) => {
                dispatch({
                    type: SEND_ORDER_SUCCESS,
                    order: res.order.number,
                });
            })
            .then(() => {
                dispatch({
                    type: CLEAR_CONSTRUCTOR,
                    data: [],
                });
            })
            .catch((err) => {
                dispatch({
                    type: SEND_ORDER_FAILED,
                    error: err.message,
                });
            });
    };
};

export const getOrder = (data) => {
    return (dispatch) => {
        dispatch({
            type: GET_ORDER,
        });
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        };
        request('orders/'`${data}`, requestOptions)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        user: res.user,
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: GET_ORDER_FAILED,
                    error: err.message,
                });
            });
    };
}
export const getIngredientDetails = (ingredient) => {
    return {
        type: CHOICE_INGREDIENT,
        data: ingredient,
    };
};

export const clearIngredientDetails = () => {
    return {
        type: DELETE_INGREDIENT,
    };
};

export const addConstructorBun = (item) => {
    return {
        type: ADD_CONSTRUCTOR_BUN,
        data: item,
    };
};

export const addConstructorIngredient = (item) => {
    return {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        data: item,
        keyId: uuid4(),
    };
};

export const setDefaultConstructor = (ingredients) => {
    return {
        type: SORTED_CONSTRUCTOR,
        data: ingredients,
    };
};

export const deleteConstructorElement = (id) => {
    return {
        type: DELETE_CONSTRUCTOR_INGREDIENT,
        index: id,
    };
};

export const clearOrderNum = () => {
    return {
        type: CLEAR_ORDER,
    }
}
