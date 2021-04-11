import React, { Component } from "react";
import "./MovieList.scss";
import MovieListItem from "./MovieListItem/MovieListItem";
import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";

class MovieList extends Component {
  render() {
    return (
      <div className="main">
        <div className="title">{this.props.section.title}</div>
        <div className="list-main">
          {/* <div className="left-button">
            <img src={leftArrow}></img>
    </div>*/}
          <div className="right-button">
            <img src={rightArrow}></img>
          </div>
          <div className="list">
            <div className="initial-space">.........</div>
            {this.props.section.movies.map((e) => {
              return <MovieListItem key={`${e.title}-${this.props.title}`} movie={e} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
