import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './Index.css';
import BookTable from './components/BookTable/BookTable';
import RestaurantUI from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import LogIn from './components/Login/Login';
import Register from './components/Register/Register';
import RestaurantList from './components/RestaurantList/RestaurantList';
import * as serviceWorker from './components/ServiceWorker/ServiceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/restaurantList" component={RestaurantList} />
      <Route path="/login" component={LogIn} />
      <Route path="/dashboard" component={RestaurantUI} />
      <Route path="/book-table" component={BookTable} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
