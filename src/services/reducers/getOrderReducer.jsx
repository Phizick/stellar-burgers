import {SEND_ORDER, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS} from "../actions/order";
import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS} from "../actions/order";

const initialState = {
    price: 0,
    orderRequestProcessing: false,
    orderRequestFailed: false,
    orderRequestSuccess: false,
    user: {},
    order: {},
    orderList: [],
    isLoad: false
};

export const getOrderData = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER: {
            return {
                ...state,
                orderRequestProcessing: true,
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
        // case CLEAR_ORDER: {
        //     return {
        //         ...state,
        //         order: 0
        //     }
        // }
        default: {
            return state;
        }
    }
};

export const getOrderReducer = (state = initialState, action) => {
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


