import React from 'react';
import './styles/login.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar id="navbar" dark expand="md">
          <Link to="/"><NavbarBrand href="/" id="navbar1"><img src={logo} width="60" height="60" /></NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/restaurantList" id="book-nav">Book</NavLink>
              </NavItem>
              <NavItem>
                <Link className="login-btn" to="/login"><Button id="login" color="warning">Log In</Button></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
