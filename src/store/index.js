import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducers from '../reducers/index';

const initialState = {};

const composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducers, initialState, composEnhancers(applyMiddleware(thunk)));
