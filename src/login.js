import React from 'react';
import NavBar from './navbar'
import { Link } from 'react-router-dom';
import './styles/login.css';
import login3 from './images/login3.jpg';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class LogIn extends React.Component {
  render() {
    return (
      <div id="login-main">
        <NavBar />
        <img src={login3} id="login-img" />
        <Form id="login-page" method="post" action="/login">
          <p id="login-text"><strong>Restaurant Manager</strong></p>
          <hr />
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input type="username" name="username" className="detail" id="username" placeholder="Enter username" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="password" className="detail" placeholder="Enter Password" />
          </FormGroup>
          <Link className="login-btn" to="/dashboard"><Button color="warning" id="login-button">Log In</Button></Link>
        </Form>
      </div>
    )
  }
}

export default LogIn;
