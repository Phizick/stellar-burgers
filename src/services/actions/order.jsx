import {getCookie} from "../../utils/cookieFunc";
import {CLEAR_CONSTRUCTOR, request} from "./index";

export const SEND_ORDER = "SEND_ORDER";
export const SEND_ORDER_SUCCESS = "SEND_ORDER_SUCCESS";
export const SEND_ORDER_FAILED = "SEND_ORDER_FAILED";
export const GET_ORDER = 'GET_ORDER';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED'

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

export const getOrders = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ORDER,
        });
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + getCookie('accessToken')
            },
        };
        request(`orders/all`, requestOptions)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        orderList: res.orders
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
export const getAuthOrders = () => {
    return (dispatch) => {
        dispatch({
            type: GET_ORDER,
        });
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: 'Bearer ' + getCookie('accessToken')
            },
        };
        request(`orders/`, requestOptions)
            .then((res) => {
                if (res.success) {
                    dispatch({
                        type: GET_ORDER_SUCCESS,
                        orderList: res.orders,
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
