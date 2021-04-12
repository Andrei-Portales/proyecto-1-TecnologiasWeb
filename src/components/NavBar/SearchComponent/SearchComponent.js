import React, { Component } from "react";
import "./SearchComponent.scss";
import searchIcon from "../../../assets/icons/search.svg";
import cancelIcon from "../../../assets/icons/cancel.svg";
import dropDownIcon from "../../../assets/icons/drop-down-arrow.svg";
import dropUpIcon from "../../../assets/icons/drop-up-arrow.svg";

import DropMenu from "../DropMenu/DropMenu";

class SearchComponent extends Component {
  constructor() {
    super();
    this.state = {
      showErase: false,
      isOpen: false,
      value: "",
    };
  }

  onTextChange(event) {
    this.setState({
      value: event.target.value,
      showErase: event.target.value.trim() !== "",
    });
  }

  clearText() {
    this.setState({ value: "" });
  }

  openDropDown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="input-profile">
        <div className="container-ele">
          <img src={searchIcon} alt="Search icon" className="icon-search"></img>
          <input
            className="search-input"
            placeholder="Buscar"
            type="text"
            onChange={this.onTextChange.bind(this)}
            value={this.state.value}
          ></input>
          {this.state.showErase ? (
            <img
              src={cancelIcon}
              alt="Cancel Icon"
              className="close-icon"
              onClick={this.clearText.bind(this)}
            ></img>
          ) : null}
        </div>

        <div className="profile-icon" onClick={this.openDropDown.bind(this)}>
          <img
            src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
            alt="profile image"
            className="avatar"
          ></img>
          <div className="name">Andrei...</div>
          {this.state.isOpen ? (
            <img
              key="dropup"
              src={dropUpIcon}
              alt="up"
              className="dropDownIcon reverse"
            />
          ) : (
            <img
              key="dropdown"
              src={dropDownIcon}
              alt="down"
              className="dropDownIcon forward"
            />
          )}
          {this.state.isOpen ? <DropMenu /> : null}
        </div>
      </div>
    );
  }
}

export default SearchComponent;
