import React, { Component } from "react";
import "./IconPopUP.scss";

class IconPopUP extends Component {
  constructor() {
    super();

    this.state = {
      showDialog: false,
    };
  }

  show() {
    console.log("enter");
    this.setState({
      showDialog: true,
    });
  }

  hide() {
    console.log("leave");
    this.setState({
      showDialog: false,
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.show.bind(this)}
        onMouseLeave={this.hide.bind(this)}
        className="icon-container"
      >
        <div className="icon-preview">
          <img src={this.props.icon}></img>
        </div>

        {this.state.showDialog ? (
          <div className="popup-info">{this.props.text}</div>
        ) : null}
      </div>
    );
  }
}

export default IconPopUP;
