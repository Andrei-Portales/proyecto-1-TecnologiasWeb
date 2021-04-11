import React, { Component } from "react";
import "./MovieList.scss";

class MovieList extends Component {
  render() {
    return (
      <div className="main">
        <div className="title">{this.props.title}</div>
        <div className="list"></div>
      </div>
    );
  }
}

export default MovieList;
