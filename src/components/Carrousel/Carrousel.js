import React, { Component } from "react";
import "./Carrousel.scss";
import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";

class Carrousel extends Component {
  constructor() {
    super();
    this.images = [
      "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheGoodDoctor_S4/4f0b893e-a56e-45ff-b596-621653f16597._UR3000,600_SX1500_FMwebp_.jpeg",
      "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_SharkTankMexico_S5/c1470b87-c654-4cce-a7e6-f5d48c2a7941._UR3000,600_SX1500_FMwebp_.jpg",
      "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_SH_DEBRU_S2_POST/7176f11b-eec3-4435-b650-7cbec5ca2cb0._UR3000,600_SX1500_FMwebp_.jpg",
      "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Rogue/7bdc7c10-a361-48ac-a8ec-4d5742175a7f._UR3000,600_SX1500_FMwebp_.jpg",
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/row_svod_familyguy/c62e2ffe-4774-4629-8aa8-473287fa53c7._UR3000,600_SX1500_FMwebp_.jpg",
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_SH_Bones_S1_S12/0fcf9a4f-3366-4090-bc38-32a6f168dad3._UR3000,600_SX1500_FMwebp_.jpg",
      "https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_vampirediaries_magellan/f6f89653-ab07-43a3-b7f8-6f428798aed3._UR3000,600_SX1500_FMwebp_.jpg",
      "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Invincible_S1/1e085cb3-36bf-42c9-b98a-5d515d165e3f._UR3000,600_SX1500_FMwebp_.jpg",
      "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheGrandTour_S4/1cd7411a-6ae7-4619-94a7-0b90418d4646._UR3000,600_SX1500_FMwebp_.jpg",
    ];
    this.state = {
      currentIndex: 0,
    };
  }

  getBottomItems() {
    let elements = [];
    for (let i = 0; i < this.images.length; i++) {
      if (i === this.state.currentIndex) {
        elements.push(<div className="bottom-current-item-selected"></div>);
      } else {
        elements.push(<div className="bottom-current-item"></div>);
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
          <div className="left-button" onClick={this.previus.bind(this)}>
            <img src={leftArrow}></img>
          </div>
        ) : null}
        {this.state.currentIndex < this.images.length - 1 ? (
          <div className="right-button" onClick={this.next.bind(this)}>
            <img src={rightArrow}></img>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Carrousel;
