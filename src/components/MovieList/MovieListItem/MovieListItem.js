import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieListItem.scss';
import commentIcon from '../../../assets/icons/comment.svg';
import blockIcon from '../../../assets/icons/block.svg';
import plusIcon from '../../../assets/icons/plus.svg';
import IconPopUP from '../../IconPopUp/IconPopUp';

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
    const { movie } = this.props;
    const { showDialog } = this.state;
    return (
      <div
        className="container"
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}
      >
        <img src={movie.image} className="item-image" alt="movie" />

        {showDialog ? (
          <div className="preview">
            {<img src={movie.image} alt="movie" className="image-preview" />}

            <div className="content-movie-preview">
              <div className="play-data">
                <div>
                  <div className="play-icon">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/DVUI/favicons/favicon-196x196._CB430399855_.png"
                      alt="play icon"
                    />
                    <div>Reproducir</div>
                  </div>
                </div>

                <div>
                  <IconPopUP
                    icon={plusIcon}
                    text="Añadir a la lista de seguimiento"
                  />
                  <IconPopUP icon={blockIcon} text="Ocultar esta pelicula" />
                </div>
              </div>

              <div className="title-movie">{movie.title}</div>
              <div className="description-movie">{movie.description}</div>
              <div className="data-movie">
                {movie.year}
                <div className="icon-movie-data">
                  <img src={commentIcon} alt="commentIcon" />
                </div>
                <div className="clasification-movie">{movie.clasification}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MovieListItem;

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
