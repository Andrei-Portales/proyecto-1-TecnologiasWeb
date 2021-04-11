import React, { Component } from "react";
import "./Carrousel.scss";
import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";
import { carouselData } from "../../utils/dummy-data";

class Carrousel extends Component {
  constructor() {
    super();
    this.images = carouselData;
    this.state = {
      currentIndex: 0,
    };
  }

  getBottomItems() {
    let elements = [];
    for (let i = 0; i < this.images.length; i++) {
      if (i === this.state.currentIndex) {
        elements.push(
          <div key={i} className="bottom-current-item-selected"></div>
        );
      } else {
        elements.push(<div key={i} className="bottom-current-item"></div>);
      }
    }
    return elements;
  }

  next() {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    });
  }

  previus() {
    this.setState({
      currentIndex: this.state.currentIndex - 1,
    });
  }

  render() {
    return (
      <div className="carrousel-container">
        <img
          key={this.state.currentIndex}
          src={this.images[this.state.currentIndex]}
          alt="Carrousel image"
        ></img>
        <div className="bottom-current">{this.getBottomItems()}</div>
        {this.state.currentIndex !== 0 ? (
          <div className="left-button1" onClick={this.previus.bind(this)}>
            <img src={leftArrow}></img>
          </div>
        ) : null}
        {this.state.currentIndex < this.images.length - 1 ? (
          <div className="right-button1" onClick={this.next.bind(this)}>
            <img src={rightArrow}></img>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Carrousel;
