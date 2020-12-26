import React from 'react';
import './Dashboard.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Row, Col, Table, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

var tables = [{ id: "Table-1", capacity: 6, occupied: false, btnID: "btn1" }, { id: "Table-2", capacity: 4, occupied: false, btnID: "btn2" }, { id: "Table-3", capacity: 4, occupied: false, btnID: "btn3" }, { id: "Table-4", capacity: 8, occupied: false, btnID: "btn4" }, { id: "Table-5", capacity: 6, occupied: false, btnID: "btn5" }, { id: "Table-6", capacity: 2, occupied: false, btnID: "btn6" }, { id: "Table-7", capacity: 6, occupied: false, btnID: "btn7" }, { id: "Table-8", capacity: 6, occupied: false, btnID: "btn8" }, { id: "Table-9", capacity: 2, occupied: false, btnID: "btn9" }, { id: "Table-10", capacity: 6, occupied: false, btnID: "btn10" }, { id: "Table-11", capacity: 8, occupied: false, btnID: "btn11" }, { id: "Table-12", capacity: 6, occupied: false, btnID: "btn12" }, { id: "Table-13", capacity: 2, occupied: false, btnID: "btn13" }, { id: "Table-14", capacity: 8, occupied: false, btnID: "btn14" }, { id: "Table-15", capacity: 6, occupied: false, btnID: "btn15" }, { id: "Table-16", capacity: 2, occupied: false, btnID: "btn16" }, { id: "Table-17", capacity: 4, occupied: false, btnID: "btn17" }]

class RestaurantUI extends React.Component {
  state = {
    user: {},
    bookings: []
  }
  componentDidMount() {
    console.log('mounted');
    axios.get('/api/auth/user')
      .then(res => {
        if (!res.data.user)
          this.props.history.push('/login')
      })

    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    }, () => {
      axios.post('/api/fetch-bookings', { resto: this.state.user.resto })
        .then(res => {
          this.setState({ bookings: res.data.bookings });
        })
    })
  }

  render() {
    return (
      <div id="restoUI">
        <h1 className="text-white m-4">{this.state.user.resto}</h1>
        <Row>
          <Col md="4" xs="12"><Bookings bookings={this.state.bookings} /></Col>
          <Col md="8" xs="12"><RestoLayout /></Col>
        </Row>
      </div>
    );
  }
}

class Bookings extends React.Component {
  render() {
    return (
      <div id="bookings">
        <Table hover id="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Booking ID</th>
              <th>Name</th>
              <th>Group Size</th>
              <th>Contact No.</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.bookings.length ?
                this.props.bookings.map((item, i, arr) => {
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.size}</td>
                      <td>{item.mobile}</td>
                    </tr>
                  )
                }) :
                <tr>
                  <td colSpan="5"><h5 className="text-center">No bookings currently</h5></td>
                </tr>
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

class RestoLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (


      <div id="resto-layout">
        {
          tables.map((table, idx, tableArr) => {
            return (
              <Card className="tables" id={table.id}>
                <CardBody>
                  <CardTitle><strong>{table.id.replace('-', ' ').toUpperCase()}</strong></CardTitle>
                  <hr />
                  <CardSubtitle>Capacity: {table.capacity}</CardSubtitle>
                  <CardText>Status: {table.occupied ? 'Full' : 'Free'}</CardText>
                  <AllotButton id={`${idx}`} status={table.occupied} tableId={table.id} btnID={table.btnID} />
                </CardBody>
              </Card>
            )
          })}
      </div>
    );
  }
}

class AllotButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(arg) {
    for (let i = 0; i < tables.length; i++) {
      if (tables[i].id == arg) {
        tables[i].occupied = !tables[i].occupied;
      }
    }
  }

  handleClick() {
    if (this.props.status) {
      document.getElementById(this.props.tableId).style.opacity = '1';
      //document.getElementById(this.props.btnID).style.background = "orange";
      this.changeStatus(this.props.tableId);
    } else {
      document.getElementById(this.props.tableId).style.opacity = '0.5';
      document.getElementById(this.props.btnID).style.background = "green";
      this.changeStatus(this.props.tableId);
    }

  }

  render() {

    return (
      <Button id={this.props.id} id={this.props.btnID} className="allot btn-warning" onClick={this.handleClick}>Allot</Button>
    )
  }
}



export default withRouter(RestaurantUI);
