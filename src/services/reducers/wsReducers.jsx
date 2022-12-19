import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_FAILED,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS,
    WS_AUTH_GET_ORDERS,
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_CONNECTION_FAILED,
    WS_AUTH_CONNECTION_CLOSED,
    WS_CONNECTION_START
} from "../actions/wsActions";


const initialState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0
}

export const wsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true,
            };
        case WS_CONNECTION_FAILED:
            return {
                ...state,
                wsConnected: false
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };
        case WS_GET_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        default:
            return state
    }
};

export const wsAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case WS_AUTH_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true
            };
        case WS_AUTH_CONNECTION_FAILED:
            return {
                ...state,
                wsConnected: false
            };
        case WS_AUTH_CONNECTION_CLOSED:
            return {
                ...state,
                wsConnected: false
            };
        case WS_AUTH_GET_ORDERS:
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            };
        default:
            return state
    }
}