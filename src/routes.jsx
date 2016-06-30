import React from 'react';
import { Route, IndexRoute } from 'react-router';

const Home = require('pages/Home/');
const App = require('pages/App/');
const Checkout = require('pages/Checkout/');
const Map = require('pages/Map/');
const Sales = require('pages/Sales/');

import { Header } from 'blocks/Header/';
const DetailsFilter = require('blocks/DetailsFilter/');

const onEnter = (nextState, replace, next) => {
	console.log('nextState ', nextState);

	//setTimeout(function(){
		next();
	//}, 3000)

//	next();
}

function loadCatalog(params, query, next) {
	return (dispathc, getState) => {
		next();
	}
}

var onLoad = function(store, action) {
	return (nextState, replace, next) => {
		store.dispathc(action(nextState.params, nextState.location.query, next));
	}
}

var createWaite = function(store) {
	return function(action){
		return (nextState, replace, next) => {
			store.dispatch(action(nextState.params, nextState.location.query, next));
		} 
	}
}

//var waite = createWaite(store);

// onEnter={waite(loadCatalog)}

const routes = (
    <Route path='/' component={App}>
      <IndexRoute component={{ main: Home }} onEnter={onEnter}/>
      <Route path='Home' component={{ main: Home }} onEnter={onEnter}/>
      <Route path='Map' component={{ main: Map }} />
      <Route path='Sales/:id' component={{ main: Sales, top: DetailsFilter }} onEnter={onEnter}/>
      
      <Route path='Checkout' component={{ main: Checkout }} />
    </Route>

);

module.exports = routes;
