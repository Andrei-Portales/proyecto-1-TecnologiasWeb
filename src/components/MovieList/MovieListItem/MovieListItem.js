import React, { Component } from "react";
import "./MovieListItem.scss";
import commentIcon from "../../../assets/icons/comment.svg";

class MovieListItem extends Component {
  constructor() {
    super();
    this.state = {
      showDialog: false,
    };
  }

  mouseEnter() {
    this.setState({
      showDialog: true,
    });
  }

  mouseLeave() {
    this.setState({
      showDialog: false,
    });
  }

  render() {
    return (
      <div
        className="container"
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}
      >
        <img
          src={this.props.movie.image}
          className="item-image"
          alt="image"
        ></img>

        {this.state.showDialog ? (
          <div className="preview">
            <img
              src={this.props.movie.image}
              className="image-preview"
              alt="image"
            ></img>
            <div className="content-movie-preview">
              <div className="title-movie">{this.props.movie.title}</div>
              <div className="description-movie">
                {this.props.movie.description}
              </div>
              <div className="data-movie">
                {this.props.movie.year}
                <div className="icon-movie-data">
                  <img src={commentIcon} alt="commentIcon"></img>
                </div>
                <div className="clasification-movie">
                  {this.props.movie.clasification}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MovieListItem;
