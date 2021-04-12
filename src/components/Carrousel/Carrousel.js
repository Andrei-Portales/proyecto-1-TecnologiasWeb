import React, { Component } from 'react';
import './Carrousel.scss';
import rightArrow from '../../assets/icons/right-arrow.svg';
import leftArrow from '../../assets/icons/left-arrow.svg';
import { carouselData } from '../../utils/dummy-data';

class Carrousel extends Component {
  constructor() {
    super();
    this.images = carouselData;
    this.state = {
      currentIndex: 0,
    };
  }

  getBottomItems() {
    const elements = [];
    const { currentIndex } = this.state;

    for (let i = 0; i < this.images.length; i++) {
      if (i === currentIndex) {
        elements.push(<div key={i} className="bottom-current-item-selected" />);
      } else {
        elements.push(<div key={i} className="bottom-current-item" />);
      }
    }
    return elements;
  }

  next() {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex + 1,
    });
  }

  previus() {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex - 1,
    });
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="carrousel-container">
        <img
          key={currentIndex}
          src={this.images[currentIndex]}
          alt="Carrousel"
        />
        <div className="bottom-current">{this.getBottomItems()}</div>
        {currentIndex !== 0 ? (
          <div className="left-button1" onClick={this.previus.bind(this)}>
            <img src={leftArrow} alt="left arrow" />
          </div>
        ) : null}
        {currentIndex < this.images.length - 1 ? (
          <div className="right-button1" onClick={this.next.bind(this)}>
            <img src={rightArrow} alt="right arrow" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Carrousel;
