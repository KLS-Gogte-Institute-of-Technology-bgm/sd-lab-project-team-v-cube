import React, { Component } from 'react';
import NavBar from './navbar';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import './styles/home.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from 'reactstrap';


const items = [
  {
    src: home1
  },
  {
    src: home2
  },
  {
    src: home3
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    document.getElementById('home-logo').animate([{transform: 'scale(0) rotate(0deg)'},{transform: 'scale(1) rotate(360deg)'}], {duration: 600});
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img class="img" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
        </CarouselItem>
      );
    });

    return (
      <div id="home-main">
        <NavBar />
        <img id="home-logo" src={logo}/>
        <Carousel id="carousel"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      <Link id="login-link" to="/restaurantList"><Button color="warning" id="book-a-table">Book A Table</Button></Link>

      </div>
    );
  }
}


export default Home;
