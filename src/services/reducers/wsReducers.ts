import { WS_CONNECTION_SUCCESS,
WS_GET_ORDERS,
WS_CONNECTION_FAILED,
WS_CONNECTION_CLOSED} from "../actions/actionsTypes/wsActionsTypes";
import { TWsActions } from "../actions/wsActions";

type TWsInitialState = {
    wsConnected: boolean;
    data: {
        orders: [],
        total: number,
        totalToday: number,
        length?: number,
} | any;
    error?: Event;
}

const initialState: TWsInitialState = {
    wsConnected: false,
    data: {
        orders: [],
        total: 0,
        totalToday: 0,
    }
}

export const wsReducer = (state = initialState, action: TWsActions): TWsInitialState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                wsConnected: true,
            };
        case WS_CONNECTION_FAILED:
            return {
                ...state,
                error: action.error,
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
                data: state.data.length
                ? [...state.data, action.payload]
                    : action.payload
            };
        default:
            return state
    }
};
