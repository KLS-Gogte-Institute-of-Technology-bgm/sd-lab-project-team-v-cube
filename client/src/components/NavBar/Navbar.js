import React from 'react';
import '../Login/Login.css';
import axios from 'axios';
import logo from '../../images/logo.png';
import { Link, withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: {}
    };
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'));
    this.setState({ user: user })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut = (e) => {
    e.preventDefault();
    axios.get('/api/auth/logout')
      .then(res => {
        this.props.setUser(null)
        this.props.history.push('/')
        localStorage.removeItem('user')
      })
  }
  render() {
    return (
      <div>
        <Navbar id="navbar" dark expand="md" style={{ background: this.props.location.pathname == '/' || '/login' ? '#111' : 'transparent' }}>
          <Link to="/"><NavbarBrand href="/" id="navbar1"><img src={logo} width="60" height="60" /></NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/restaurantList" id="book-nav">Book</NavLink>
              </NavItem>
              <NavItem>
                {this.props.user ? <Button className="login-btn" color="warning" onClick={this.logOut}>Log Out</Button> : <Link className="login-btn" to="/login"><Button id="login" color="warning">Log In</Button></Link>}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);