import React, { Component } from "react";
import "./MovieList.scss";
import MovieListItem from "./MovieListItem/MovieListItem";
import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";

class MovieList extends Component {
  
  constructor(props) {
    super(props);
    this.container = null;
  }

  leftScroll() {
   
  }

  rightScroll() {
    
   
  }

  render() {
    return (
      <div className="main">
        <div className="title">{this.props.section.title}</div>
        <div className="list-main">
          <div
            className="list"
            ref={(node) => {
              this.container = node;
            }}
          >
            <div className="initial-space">.........</div>

            {this.props.section.movies.map((e) => {
              return (
                <MovieListItem
                  key={`${e.title}-${this.props.title}`}
                  movie={e}
                />
              );
            })}
          </div>

          <div className="left-button" onClick={this.leftScroll.bind(this)}>
            <img src={leftArrow}></img>
          </div>

          <div className="right-button" onClick={this.rightScroll.bind(this)}>
            <img src={rightArrow}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
