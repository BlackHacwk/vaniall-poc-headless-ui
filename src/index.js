import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers/index';

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}><App/></Provider>,
    document.getElementById('root'));
serviceWorker.unregister();