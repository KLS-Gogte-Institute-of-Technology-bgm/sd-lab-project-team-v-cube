import React from 'react';
import './BookTable.css';
import { Button, Form, FormGroup, Label, Input, Row, Col, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:5000";
const socket = socketIOClient(ENDPOINT);
class BookTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingID: 100,
      clicked: false,
      queue: null
    }
  }

  componentDidMount() {
    socket.on(this.props.match.params.name, data => {
      if (data.id)
        this.setState({ bookingID: data.id });
      let pos = data.bookings.findIndex(x => x._id == this.state.bookingID) + 1 - data.tables;
      console.log('position', pos, this.state.bookingID, data.bookings, data.tables);
      this.setState({ queue: pos, tableNum: data.tables })
    })
  }

  componentWillUnmount() {
    socket.off(this.props.match.params.name)
    socket.disconnect()
  }

  updateBookingId = (id) => {
    this.setState({
      bookingID: id,
      clicked: true
    })
  }

  render() {
    return (
      <div id="book-table-main">
        <Row>
          <Col md={{ size: 4, offset: 1 }} s="12"><Book resto={this.props.match.params.name} bookingID={this.state.bookingID} updateBookingId={this.updateBookingId} clicked={this.state.clicked} /></Col>
          <Col md="6" s="12"><Info bookingID={this.state.bookingID} clicked2={this.state.clicked} queue={this.state.queue} /></Col>
        </Row>
      </div>
    );
  }
}

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: '',
      time: '',
      name: '',
      email: '',
      mobile: '',
      validEmail: true,
      validMobile: true
    }
  }

  bookTable = (e) => {
    e.preventDefault();
    axios.post('/api/book-table', {
      size: this.state.size,
      time: this.state.time,
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email,
      resto: this.props.resto
    })
      .then(res => {
        this.props.updateBookingId(res.data.id);
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

    if (event.target.name == 'email') {
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event.target.value)) {
        this.setState({
          validEmail: false
        })
      } else {
        this.setState({
          validEmail: true
        })
      }
    }

    if (event.target.name == 'mobile') {
      if (!/^\d{10,11}$/.test(event.target.value)) {
        this.setState({
          validMobile: false
        })
      } else {
        this.setState({
          validMobile: true
        })
      }
    }
  }

  render() {
    return (

      <div id="booking-process">
        <Form id="booking-form">
          <FormGroup>
            <Label for="group-size">Group Size</Label>
            <Input
              type="number"
              name="size"
              id="group-size"
              min="2"
              max="10"
              required
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="booking-time">Booking Time</Label>
            <Input
              type="time"
              name="time"
              id="booking-time"
              placeholder="time placeholder"
              required
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              required
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="mobileNumber">Mobile Number</Label>
            <Input
              type="text"
              name="mobile"
              id="mobileNumber"
              placeholder="Enter your mobile number"
              required
              onChange={this.handleChange}
            />
            {this.state.validMobile ? <span></span> : <span className="text-danger">Please enter a valid mobile number</span>}
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={this.handleChange}
            />
            {this.state.validEmail ? <span></span> : <span className="text-danger">Please enter a valid email</span>}
          </FormGroup>

          {this.props.clicked ? <Button color="warning" disabled>Booked</Button> :
            <Button type="submit" color="warning" onClick={this.bookTable}>Book Table</Button>}

          <Alert id="booking-alert" color="success">Booking ID: {this.props.bookingID}</Alert>
        </Form>
      </div>
    )
  }
}


class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = { time: 45 }
  }


  render() {

    return (
      <div id="booking-info">
        {this.props.queue == null ? <h3 className="text-center">Please enter your details to book a table</h3> : this.props.queue <= 0 ? <h3>Your table has been reserved. You can proceed to the restaurant.</h3> :
          <div><h2>Number In Queue: {this.props.queue}</h2> <h3>Estimated Waiting Time: {this.state.time * this.props.queue} min</h3></div>}

        {this.props.clicked2 ? <div>
          <h5>Your Booking ID: {this.props.bookingID}</h5></div> : ''
        }
      </div>
    )
  }
}




export default withRouter(BookTable);
