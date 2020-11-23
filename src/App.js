import React from 'react';
import NavBar from './navbar';
import RestaurantUI from './RestaurantUI';
import Home from './home';
import LogIn from './login';
import RestaurantList from './restaurantList';


class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
