import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {socketMiddleware} from "./middleware/socketMiddleware";
import {
    wsActions, wsAuthActions
} from "./actions/wsActions";

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const wsAuthUrl = 'wss://norma.nomoreparties.space/orders';


// // const composeEnhancers =
// //     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// //         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// //         : compose;
// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }
//
//
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk,
//         socketMiddleware(wsUrl, wsActions, false),
//         socketMiddleware(wsAuthUrl, wsAuthActions, true)));
// export const store = createStore(rootReducer, enhancer);
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk,
        socketMiddleware(wsUrl, wsActions, false),
        socketMiddleware(wsAuthUrl, wsAuthActions, true)));
export const store = createStore(rootReducer, enhancer);
