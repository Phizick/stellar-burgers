import {
    WS_CONNECTION_START,
    WS_SEND_ORDERS,
    WS_GET_ORDERS,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_FAILED,
    WS_CONNECTION_STOP,
    WS_CONNECTION_SUCCESS} from "./actionsTypes/wsActionsTypes";
import {TOrder} from "../types/types";

interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START
}

interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
    payload?: Event;
}

interface IWsConnectionFailed {
    readonly type: typeof WS_CONNECTION_FAILED;
    payload?: Event;
}

interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS
    payload?: Event;
}

interface IWsConnectionStop {
    readonly type: typeof WS_CONNECTION_STOP
    payload?: Event;
}

interface IWsGetOrders {
    readonly type: typeof WS_GET_ORDERS;
    payload: any;
}

interface IWsSendOrders {
    readonly type: typeof WS_SEND_ORDERS;
    payload: TOrder;
}

interface IWsNonAuthConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    payload: {
        url: string;
        isAuth: boolean;
    }
}

interface IWsAuthConnectionStart {
    readonly type: typeof WS_CONNECTION_START;
    payload: {
        url: string;
        isAuth: boolean;
    }
}

export type TWsActions =
    | IWsConnectionStart
    | IWsConnectionClosed
    | IWsConnectionFailed
    | IWsConnectionSuccess
    | IWsConnectionStop
    | IWsGetOrders
    | IWsSendOrders
    | IWsAuthConnectionStart
    | IWsNonAuthConnectionStart



export type TWsSocketActions = {
    readonly wsInit: typeof WS_CONNECTION_START,
    readonly onError: typeof WS_CONNECTION_FAILED,
    readonly wsClosed: typeof WS_CONNECTION_STOP,
    readonly onOpen: typeof WS_CONNECTION_SUCCESS,
    readonly onClose: typeof WS_CONNECTION_CLOSED,
    readonly onMessage: typeof WS_GET_ORDERS,
    readonly wsSendMessage: typeof WS_SEND_ORDERS
}

export const wsActions: TWsSocketActions = {
    wsInit: WS_CONNECTION_START,
    onError: WS_CONNECTION_FAILED,
    wsClosed: WS_CONNECTION_STOP,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_ORDERS,
    wsSendMessage: WS_SEND_ORDERS
}

