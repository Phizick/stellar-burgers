import {
    WS_CONNECTION_START,
    WS_SEND_ORDERS,
    WS_GET_ORDERS,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_FAILED,
    WS_CONNECTION_STOP,
    WS_CONNECTION_SUCCESS} from "./actionsTypes/wsActionsTypes";

interface IWsConnectionStart {
    readonly type: typeof WS_CONNECTION_START
}

interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED
}

interface IWsConnectionFailed {
    readonly type: typeof WS_CONNECTION_FAILED
}

interface IWsConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS
}

interface IWsConnectionStop {
    readonly type: typeof WS_CONNECTION_STOP
}

interface IWsGetOrders {
    readonly type: typeof WS_GET_ORDERS
}

interface IWsSendOrders {
    readonly type: typeof WS_SEND_ORDERS
}


export type TWsActions = {
    wsInit: typeof WS_CONNECTION_START,
    onError: typeof WS_CONNECTION_FAILED,
    wsClosed: typeof WS_CONNECTION_STOP,
    onOpen: typeof WS_CONNECTION_SUCCESS,
    onClose: typeof WS_CONNECTION_CLOSED,
    onMessage: typeof WS_GET_ORDERS,
    wsSendMessage: typeof WS_SEND_ORDERS
}

export const wsActions: TWsActions = {
    wsInit: WS_CONNECTION_START,
    onError: WS_CONNECTION_FAILED,
    wsClosed: WS_CONNECTION_STOP,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_ORDERS,
    wsSendMessage: WS_SEND_ORDERS
}