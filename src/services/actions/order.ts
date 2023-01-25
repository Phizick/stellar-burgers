import {getCookie} from "../../utils/cookieFunc";
import {CLEAR_CONSTRUCTOR, request} from "./index";
import {Dispatch} from "react";



export const setOrder = (ingredients: any) => {
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
    return (dispatch: Dispatch<any>) => {
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
            .then((res: any) => {
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
