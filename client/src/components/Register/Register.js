import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import login3 from '../../images/login3.jpg';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: '',
      passwordValid: ''
    }
  }

  setUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value })

    if (/^(?=.*[A-Za-z])(?=.*\d).{10,}$/.test(e.target.value))
      this.setState({ passwordValid: true })
    else
      this.setState({ passwordValid: false })
  }

  signUp = (event) => {
    event.preventDefault();

    axios.post('/api/auth/signup', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        this.props.history.push('/login')
      })
      .catch(err => {
        this.setState({ error: 'Username or password is incorrect' })
      })

  }

  render() {
    return (
      <div id="login-main">
        <img src={login3} id="login-img" />
        <Form id="login-page" method="post" action="/register">
          <p id="login-text"><strong>Register</strong></p>
          <hr />
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input type="username" name="username" className="detail" id="username" placeholder="Enter username"
              value={this.state.username} onChange={this.setUsername} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="password" className="detail" placeholder="Enter Password"
              value={this.state.password} onChange={this.setPassword} />
            {this.state.passwordValid || this.state.password.length == 0 ? <span></span> : <FormText className="text-danger">Your password must be at least 10 characters long and must contain a number</FormText>}
          </FormGroup>
          <Button color="warning" id="login-button" onClick={this.signUp}>Register</Button>
        </Form>
      </div>
    )
  }
}

export default Register;
