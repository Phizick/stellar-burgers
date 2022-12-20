import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App'
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./services/store";
// @ts-ignore
import { BrowserRouter } from 'react-router-dom';

// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk';
// import { rootReducer } from './services/reducers/rootReducer';
// import { legacy_createStore as createStore, applyMiddleware} from 'redux';

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

);
reportWebVitals();


