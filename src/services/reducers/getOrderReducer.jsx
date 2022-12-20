import {SEND_ORDER, SEND_ORDER_FAILED, SEND_ORDER_SUCCESS} from "../actions/order";
import { GET_ORDER, GET_ORDER_FAILED, GET_ORDER_SUCCESS} from "../actions/order";

const initialState = {
    order: 0,
    orderRequestProcessing: false,
    orderRequestFailed: false,
    user: {}
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
                orderRequestProcessing: true,
            };
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderRequestProcessing: false,
                user: action.user,
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

// export const getOrderAny = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_ORDER: {
//             return {
//                 ...state,
//                 orderRequestProcessing: true,
//             };
//         }
//         case GET_ORDER_SUCCESS: {
//             return {
//                 ...state,
//                 orderRequestProcessing: false,
//                 order: action.order,
//             };
//         }
//         case GET_ORDER_FAILED: {
//             return {
//                 ...state,
//                 orderRequestProcessing: false,
//                 orderRequestFailed: true,
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// }
