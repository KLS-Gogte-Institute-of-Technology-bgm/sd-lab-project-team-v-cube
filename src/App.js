import React from 'react';
import NavBar from './components/NavBar/Navbar';
import RestaurantUI from './components/RestaurantUI/RestaurantUI';
import Home from './components/Home/Home';
import LogIn from './components/Login/Login';
import RestaurantList from './components/RestaurantList/RestaurantList';


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
