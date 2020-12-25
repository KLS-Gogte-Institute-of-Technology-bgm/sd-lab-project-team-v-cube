import React from 'react';
import './Dashboard.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Row, Col, Table, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

var tables = [{ id: "Table-1", capacity: 6, occupied: false, btnID: "btn1" }, { id: "Table-2", capacity: 4, occupied: false, btnID: "btn2" }, { id: "Table-3", capacity: 4, occupied: false, btnID: "btn3" }, { id: "Table-4", capacity: 8, occupied: false, btnID: "btn4" }, { id: "Table-5", capacity: 6, occupied: true, btnID: "btn5" }, { id: "Table-6", capacity: 2, occupied: false, btnID: "btn6" }, { id: "Table-7", capacity: 6, occupied: true, btnID: "btn7" }, { id: "Table-8", capacity: 6, occupied: false, btnID: "btn8" }, { id: "Table-9", capacity: 2, occupied: true, btnID: "btn9" }, { id: "Table-10", capacity: 6, occupied: false, btnID: "btn10" }, { id: "Table-11", capacity: 8, occupied: false, btnID: "btn11" }, { id: "Table-12", capacity: 6, occupied: true, btnID: "btn12" }, { id: "Table-13", capacity: 2, occupied: false, btnID: "btn13" }, { id: "Table-14", capacity: 8, occupied: true, btnID: "btn14" }, { id: "Table-15", capacity: 6, occupied: false, btnID: "btn15" }, { id: "Table-16", capacity: 2, occupied: true, btnID: "btn16" }, { id: "Table-17", capacity: 4, occupied: false, btnID: "btn17" }]

class RestaurantUI extends React.Component {

  componentDidMount() {
    axios.get('/api/auth/user')
      .then(res => {
        if (!res.data.user)
          this.props.history.push('/login')
      })
  }

  render() {
    return (
      <div id="restoUI">
        <Row>
          <Col md="4" xs="12"><Bookings /></Col>
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
              <th>Group Size</th>
              <th>Contact No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>456</td>
              <td>6</td>
              <td>945546660</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>457</td>
              <td>4</td>
              <td>956578908</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>458</td>
              <td>10</td>
              <td>955643245</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>459</td>
              <td>2</td>
              <td>897652341</td>
            </tr>
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
              <div>
                <Card className="tables" id={table.id}>
                  <CardBody>
                    <CardTitle><strong>{table.id.replace('-', ' ').toUpperCase()}</strong></CardTitle>
                    <hr />
                    <CardSubtitle>Capacity: {table.capacity}</CardSubtitle>
                    <CardText>Status: {table.occupied ? 'Full' : 'Free'}</CardText>
                    <AllotButton id={`${idx}`} status={table.occupied} tableId={table.id} btnID={table.btnID} />
                  </CardBody>
                </Card>
              </div>
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
