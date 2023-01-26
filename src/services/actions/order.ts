import {getCookie} from "../../utils/cookieFunc";
import { request} from "./index";
import { AppDispatch, AppThunk} from "../types";
import { TIngredient} from "../types";
import { SEND_ORDER,
SEND_ORDER_FAILED,
SEND_ORDER_SUCCESS,
GET_ORDER_SUCCESS,
GET_ORDER,
GET_ORDER_FAILED,
CLEAR_CONSTRUCTOR} from "./actionsTypes/orderTypes";


interface ISendOrder {
    readonly type: typeof SEND_ORDER
}

interface ISendOrderSuccess {
    readonly type: typeof SEND_ORDER_SUCCESS
}

interface ISendOrderFailed {
    readonly type: typeof SEND_ORDER_FAILED
}

interface IClearConstructor {
    readonly type: typeof CLEAR_CONSTRUCTOR
}



export const setOrder: AppThunk = (ingredients: Array<TIngredient>) => {
    return (dispatch: AppDispatch) => {
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

interface IGetOrder {
    readonly type: typeof GET_ORDER
}

interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS
}

interface IGetOrderFailed {
    readonly type: typeof GET_ORDER_FAILED
}


export const getOrders: AppThunk = () => {
    return (dispatch: AppDispatch) => {
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
export const getAuthOrders: AppThunk = () => {
    return (dispatch: AppDispatch) => {
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

export type TOrderActions =
    | ISendOrder
    | ISendOrderSuccess
    | ISendOrderFailed
    | IClearConstructor
    | IGetOrder
    | IGetOrderSuccess
    | IGetOrderFailed;
