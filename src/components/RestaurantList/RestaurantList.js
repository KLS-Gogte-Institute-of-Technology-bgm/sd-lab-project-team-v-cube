import React from 'react';
import './RestaurantList.css';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Badge, Button, Row, Col } from 'reactstrap';
import NavBar from '../NavBar/Navbar';
import bg1 from '../../images/bg1.jpg';


export default class RestaurantList extends React.Component {
  render() {
    var ratings = [4.1, 3.6, 4.8, 3.3, 4.2, 3.1, 4.8, 4.3, 2.9, 3.8, 4.9, 4.1];
    return (
      <div id="list-main">
        <NavBar />
        <Row>
         <Col sm="12" md={{ size: 10, offset: 1 }}>
           <ListGroup id="list-layout">
             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Roll Goal  </strong><Badge pill className="rating" id="rt1">{ratings[0]}</Badge><br/><span className="type">Rolls, Sandwiches   </span>
             <Link to="/book-table"><Button className="book">Book A Table</Button></Link>
             </ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Punjabi Tadka  </strong><Badge pill className="rating" id="rt2">{ratings[1]}</Badge><br/><span className="type">North Indian   </span>
             <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>What The Forks?  </strong><Badge pill className="rating" id="rt3">{ratings[2]}</Badge><br/><span className="type">Multicuisine   </span>
             <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Sweet Beat  </strong><Badge pill className="rating" id="rt4">{ratings[3]}</Badge><br/><span className="type">Ice Cream, Desserts   </span>
             <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Yin & Yang  </strong><Badge pill className="rating" id="rt5">{ratings[4]}</Badge><br/><span className="type">Chinese, Thai   </span>
            <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Prima Dora  </strong><Badge pill className="rating" id="rt6">{ratings[5]}</Badge><br/><span className="type">Italian, Continental   </span>
            <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Mood For Food  </strong><Badge pill className="rating" id="rt7">{ratings[6]}</Badge><br/><span className="type">Fast Food, Beverages   </span>
             <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Mughlai Palace  </strong><Badge pill className="rating" id="rt8">{ratings[7]}</Badge><br/><span className="type">North Indian, Biryani   </span>
             <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Appa Tucker  </strong><Badge pill className="rating" id="rt9">{ratings[8]}</Badge><br/><span className="type">South Indian, Snacks   </span>
             <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Fatty Bao  </strong><Badge pill className="rating" id="rt10">{ratings[9]}</Badge><br/><span className="type">Japanese, Malaysian   </span>
            <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Chez Moi   </strong><Badge pill className="rating" id="rt11">{ratings[10]}</Badge><br/><span className="type">French, Bakery   </span>
            <Link to="/book-table"><Button className="book">Book A Table</Button></Link></ListGroupItem>

             <ListGroupItem className="justify-content-between"> <img className="icon" src={bg1} /><strong>Suresh Anna GIT</strong><Badge pill className="rating" id="rt12">{ratings[11]}</Badge><br/><span className="type">Fast Food, Everything   </span>
             <Link to="/book-table"><Button className="book">Book A Katta</Button></Link></ListGroupItem>

           </ListGroup>
         </Col>
       </Row>
      </div>
    );
  }
}
