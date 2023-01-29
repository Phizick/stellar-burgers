import {SEND_ORDER, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS} from '../actions/actionsTypes/orderTypes'
import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS} from '../actions/actionsTypes/orderTypes';

const initialState = {
    price: 0,
    orderRequestProcessing: false,
    orderRequestFailed: false,
    orderRequestSuccess: false,
    user: {},
    order: {},
    orderList: [],
    isLoad: false,

};

export const getOrderData = (state = initialState, action: any) => {
    switch (action.type) {
        case SEND_ORDER: {
            return {
                ...state,
                ...action.payload
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

export const getOrderReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ORDER: {
            return {
                ...state,
                ...action.payload
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


