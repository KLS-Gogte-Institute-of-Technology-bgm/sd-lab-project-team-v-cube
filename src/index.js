import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import BookTable from './book-table';
import RestaurantUI from './dashboard';
import Home from './home';
import LogIn from './login';
import Register from './register';
import RestaurantList from './restaurantList';
import * as serviceWorker from './serviceWorker';

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
