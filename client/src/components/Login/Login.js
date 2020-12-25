import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';
import './Login.css';
import login3 from '../../images/login3.jpg';

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }

  setUsername = (e) => {
    this.setState({ username: e.target.value })
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value })
  }

  logIn = (event) => {
    event.preventDefault();

    axios.post('/api/auth/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        this.props.setUser(res.data.user);
        this.props.history.push('/dashboard')
      })
      .catch(err => {
        this.setState({ error: 'Username or password is incorrect' })
      })

  }

  render() {
    return (
      <div id="login-main">
        <img src={login3} id="login-img" />
        <Form id="login-page" method="post" action="/login">
          {this.state.error ? <Alert color="danger" className="text-center">{this.state.error}</Alert> : <span></span>}
          <p id="login-text"><strong>Restaurant Manager</strong></p>
          <hr />
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="username" name="username" className="detail" id="username" placeholder="Enter username" onChange={this.setUsername} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" className="detail" placeholder="Enter Password" onChange={this.setPassword} />
          </FormGroup>
          <Button color="warning" id="login-button" onClick={this.logIn}>Log In</Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(LogIn);
