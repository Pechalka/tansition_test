
//import React from 'react'
var React = require('react');
var { render } = require('react-dom');
//import { render } from 'react-dom'

const routes = require('./routes');

import { appStart } from './actions';

import {Provider} from 'react-redux';
import {ReduxRouter} from 'redux-router';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import useScroll from 'scroll-behavior';

import createHistory from 'history/lib/createHashHistory';
//'history/lib/createBrowserHistory';



import rootReducer from 'reducers';
import {reduxReactRouter} from 'redux-router';

let createStoreWithMiddleware;

const middleware = applyMiddleware(thunk);

const createHistoryCustom = (options) => useScroll(createHistory({ queryKey: false, ...options }));

createStoreWithMiddleware = compose(
 middleware,
 reduxReactRouter({ routes, createHistory: createHistoryCustom })
);

const store = createStoreWithMiddleware(createStore)(rootReducer);

// const store = createStore(rootReducer)

render((
	<Provider store={store}>
		<ReduxRouter>
			{routes}
		</ReduxRouter>
	</Provider>
), document.getElementById('app'))


store.dispatch(appStart());

