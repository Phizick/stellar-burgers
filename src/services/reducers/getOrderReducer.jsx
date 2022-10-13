import {SEND_ORDER, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS} from "../actions";

const initialState = {
    orderData: {},
    orderRequestProcessing: false,
    orderRequestFailed: false
};

export const getOrderData = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ORDER: {
            return {
                ...state,
                orderRequestProcessing: true
            }
        }
        case SEND_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequestProcessing: false,
                orderData: action.order
            }
        }
        case SEND_ORDER_FAILED: {
            return {
                ...state,
                orderRequestProcessing: false,
                orderRequestFailed: true
            }
        }
        default: {
            return state;
        }
    }
};