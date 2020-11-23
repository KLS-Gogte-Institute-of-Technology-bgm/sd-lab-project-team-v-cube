import React from 'react';
import './styles/book-table.css';
import NavBar from './navbar';
import { Button, Form, FormGroup, FormFeedback, Label, Input, FormText, Row, Col, CustomInput, Alert } from 'reactstrap';


class BookTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {bookingID: 100, clicked: false}
  this.updateBookingId = this.updateBookingId.bind(this)
  }

   updateBookingId() {
    this.setState({
      bookingID: this.state.bookingID+1,
      clicked: true
    })
  }

  render() {
    return (
    <div id="book-table-main">
      <NavBar />
      <Row>
        <Col md={{ size: 4, offset: 1 }} xs="12"><Book bookingID={this.state.bookingID} updateBookingId={this.updateBookingId} clicked={this.state.clicked}/></Col>
        <Col md="6" xs="12"><Info bookingID={this.state.bookingID} clicked2={this.state.clicked} /></Col>
      </Row>
    </div>
  );
  }
}

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {email: '', mobile: ''}
    this.allotBookingId = this.allotBookingId.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  allotBookingId() {
  if(/.*@.*\.com/.test(this.state.email)||(this.state.mobile.length==10)) {
    alert(`Your Booking ID is: ${this.props.bookingID}`);
    document.getElementById('booking-alert').style.display = "inline";
    this.props.updateBookingId();
  }
  if((!/^[6789].*/.test(this.state.mobile))||(this.state.mobile.length!=10)) {
    alert("Enter a valid mobile number. The mobile number should have 10 digits and must begin with 6, 7, 8 or 9.");
  }
  if(!/.*@.*\.com/.test(this.state.email)) {
    alert("Enter a valid email\n For eg: example@email.com");
  }
}

  handleChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleNumbers(event) {
    this.setState({
      mobile: event.target.value
    })
  }

  render() {
    return (

    <div id="booking-process">
      <Form id="booking-form">
      <FormGroup>
          <Label for="group-size">Group Size</Label>
          <Input
            type="number"
            name="group"
            id="group-size"
            min="2"
            max = "10"
            required
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
              onChange={this.handleNumber}
            />
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
              <FormFeedback invalid>Enter a valid email</FormFeedback>
            </FormGroup>
            {this.props.clicked ? <Button color="warning" onClick={this.allotBookingId} disabled>Booked</Button> :
            <Button type="submit" color="warning" onClick={this.allotBookingId}>Book Table</Button>}

            <Alert id="booking-alert" color="success">Booking ID: {this.props.bookingID-1}</Alert>
      </Form>
    </div>
  )
  }
}


class Info extends React.Component {
  constructor(props) {
    super(props)
    this.state = {queue: 4, time: 30}
  }


  render() {

    return (
      <div id="booking-info">
        <h2>Number In Queue: {this.state.queue}</h2>
        <h3>Estimated Waiting Time: {this.state.time} min</h3>
        {this.props.clicked2 ? <div><h3>Next: {this.props.bookingID+this.state.queue}</h3>
        <h5>Your Booking ID: {this.props.bookingID-1}</h5></div> : ''
        }
      </div>
  )
  }
}




export default BookTable;
