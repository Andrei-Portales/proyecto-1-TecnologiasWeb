import React, { Component } from "react";
import "./MovieListItem.scss";
import commentIcon from "../../../assets/icons/comment.svg";
import blockIcon from "../../../assets/icons/block.svg";
import plusIcon from "../../../assets/icons/plus.svg";
import IconPopUP from "../../IconPopUp/IconPopUp";

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

        {/*this.state.showDialog ? (
          <div className="preview">
            <img
              src={this.props.movie.image}
              className="image-preview"
              alt="image"
            ></img>
            <div className="content-movie-preview">
              <div className="play-data">
                <div>
                  <div className="play-icon">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/DVUI/favicons/favicon-196x196._CB430399855_.png"
                      alt="play icon"
                    ></img>
                    <div>Reproducir</div>
                  </div>
                </div>

                <div>
                  <IconPopUP icon={plusIcon} text="Añadir a la lista de seguimiento"/>
                  <IconPopUP icon={blockIcon} text="Ocultar esta pelicula"/>
                </div>
              </div>

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
        ) : null*/}


      </div>
    );
  }
}

export default MovieListItem;
