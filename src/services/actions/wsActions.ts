export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_FAILED = 'WS_CONNECTION_FAILED';
export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS = 'WS_GET_ORDERS';
export const WS_SEND_ORDERS = 'WS_SEND_ORDERS';
export const WS_CONNECTION_STOP = 'WS_CONNECTION_STOP';

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


export const wsActions = {
    wsInit: WS_CONNECTION_START,
    onError: WS_CONNECTION_FAILED,
    wsClosed: WS_CONNECTION_STOP,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_ORDERS,
    wsSendMessage: WS_SEND_ORDERS
}
