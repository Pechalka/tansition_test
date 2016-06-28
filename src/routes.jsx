import React from 'react';
import { Route, IndexRoute } from 'react-router';

const Home = require('pages/Home/');
const App = require('pages/App/');
const Checkout = require('pages/Checkout/');
const Map = require('pages/Map/');


const routes = (
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='Home' component={Home} />
      <Route path='Map' component={Map} />
      <Route path='Checkout' component={Checkout} />
    </Route>

);

module.exports = routes;
