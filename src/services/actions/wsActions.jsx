export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_FAILED = 'WS_CONNECTION_FAILED';
export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS = 'WS_GET_ORDERS';
export const WS_SEND_ORDERS = 'WS_SEND_ORDERS';

export const WS_AUTH_CONNECTION_SUCCESS = 'WS_AUTH_CONNECTION_SUCCESS';
export const WS_AUTH_CONNECTION_FAILED = 'WS_AUTH_CONNECTION_FAILED';
export const WS_AUTH_CONNECTION_START = 'WS_AUTH_CONNECTION_START';
export const WS_AUTH_CONNECTION_CLOSED = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_AUTH_GET_ORDERS = 'WS_AUTH_GET_ORDERS';
export const WS_AUTH_SEND_ORDERS = 'WS_AUTH_SEND_ORDERS';
export const WS_CONNECTION_STOP = 'WS_CONNECTION_STOP'

export const wsActions = {
    wsInit: WS_CONNECTION_START,
    onError: WS_CONNECTION_FAILED,
    wsClosed: WS_CONNECTION_STOP,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_ORDERS,
    wsSendMessage: WS_SEND_ORDERS
}

export const wsAuthActions = {
    wsInit: WS_AUTH_CONNECTION_START,
    onError: WS_AUTH_CONNECTION_FAILED,
    onOpen: WS_AUTH_CONNECTION_SUCCESS,
    onClose: WS_AUTH_CONNECTION_CLOSED,
    onMessage: WS_AUTH_GET_ORDERS,
    wsSendMessage: WS_AUTH_SEND_ORDERS
}

export const wsConnectionOpen = () => {
    return { type: WS_CONNECTION_START }
}

export const wsConnectionClosed = () => {
    return { type: WS_CONNECTION_CLOSED }
}

export const wsGetMessage = (data) => {
    return {
        type: WS_GET_ORDERS,
        payload: data
    }
}

export const wsSendMessage = (data) => {
    return {
        type: WS_SEND_ORDERS,
        payload: data
    }
}


export const wsAuthConnectionOpen = () => {
    return { type: WS_AUTH_CONNECTION_START }
}


export const wsAuthConnectionClosed = () => {
    return { type: WS_AUTH_CONNECTION_CLOSED }
}

export const wsAuthGetMessage = (data) => {
    return {
        type: WS_AUTH_GET_ORDERS,
        payload: data
    }
}

export const wsAuthSendMessage = (data) => {
    return {
        type: WS_AUTH_SEND_ORDERS,
        payload: data
    }
}