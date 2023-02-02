import {CLEAR_CONSTRUCTOR, SEND_ORDER, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS} from '../actions/actionsTypes/orderTypes'
import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS} from '../actions/actionsTypes/orderTypes';
import {TOrder, TUser} from "../types/types";

const initialState = {
    price: 0,
    orderRequestProcessing: false,
    orderRequestFailed: false,
    orderRequestSuccess: false,
    user: null,
    order: null,
    orderList: [],
    isLoad: false,
};

export type TOrderType = {
    price: number,
    orderRequestProcessing: boolean,
    orderRequestFailed: boolean,
    orderRequestSuccess: boolean,
    user: TUser | null,
    order: TOrder | null,
    orderList: TOrder[],
    isLoad: boolean,
}


interface ISendOrder {
    readonly type: typeof SEND_ORDER
}

interface IClearConstructor {
    readonly type: typeof CLEAR_CONSTRUCTOR
}

interface ISendOrderSuccess {
    readonly type: typeof SEND_ORDER_SUCCESS
    order: TOrder
}

interface ISendOrderFailed {
    readonly type: typeof SEND_ORDER_FAILED
}

interface IGetOrder {
    readonly type: typeof GET_ORDER
}

interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS
    orderList: TOrder[]
}

interface IGetOrderFailed {
    readonly type: typeof GET_ORDER_FAILED
}

export type TOrderActions =
    | ISendOrder
    | ISendOrderSuccess
    | ISendOrderFailed
    | IGetOrder
    | IGetOrderSuccess
    | IGetOrderFailed
    | IClearConstructor


export const getOrderData = (state: TOrderType = initialState, action: TOrderActions): TOrderType => {
    switch (action.type) {
        case SEND_ORDER: {
            return {
                ...state,
            };
        }
        case SEND_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequestProcessing: false,
                order: action.order,
                isLoad: true
            };
        }
        case SEND_ORDER_FAILED: {
            return {
                ...state,
                orderRequestProcessing: false,
                orderRequestFailed: true,
            };
        }
        default: {
            return state;
        }
    }
};

export const getOrderReducer = (state: TOrderType = initialState, action: TOrderActions): TOrderType => {
    switch (action.type) {
        case GET_ORDER: {
            return {
                ...state,
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequestProcessing: false,
                orderList: action.orderList
            };
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                orderRequestProcessing: false,
                orderRequestFailed: true,
            };
        }
        default: {
            return state;
        }
    }
}


