import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {socketMiddleware} from "./middleware/socketMiddleware";
import {
    wsActions, wsAuthActions
} from "./actions/wsActions";

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
const wsAuthUrl = 'wss://norma.nomoreparties.space/orders';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk,
        socketMiddleware(wsActions)));
export const store = createStore(rootReducer, enhancer);
