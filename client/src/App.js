import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import BookTable from './components/BookTable/BookTable';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import LogIn from './components/Login/Login';
import NavBar from './components/NavBar/Navbar';
import Register from './components/Register/Register';
import RestaurantList from './components/RestaurantList/RestaurantList';


class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    axios.get('/api/auth/user')
      .then(res => {
        this.setState({
          user: res.data.user
        })
      })
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.user} setUser={this.setUser} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurantList" component={RestaurantList} />
            <Route exact path="/login"
              render={(props) => (
                <LogIn {...props} setUser={this.setUser} />
              )} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/book-table/:name"
              render={(props) => (
                <BookTable {...props} />
              )} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
