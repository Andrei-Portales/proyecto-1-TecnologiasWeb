import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import './MovieList.scss';
import MovieListItem from './MovieListItem/MovieListItem';
import rightArrow from '../../assets/icons/right-arrow.svg';
import leftArrow from '../../assets/icons/left-arrow.svg';

class MovieList extends Component {
  constructor(props) {
    super(props);

    const { section } = props;

    this.state = {
      items: section.movies,
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false,
    };

    this.checkForOverflow = this.checkForOverflow.bind(this);
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this);

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000);
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200,
    );

    this.container = null;
  }

  componentDidMount() {
    this.checkForOverflow();
    this.checkForScrollPosition();

    this.container.addEventListener(
      'scroll',
      this.debounceCheckForScrollPosition,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { items } = this.state;
    if (prevState.items.length !== items.length) {
      this.checkForOverflow();
      this.checkForScrollPosition();
    }
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      'scroll',
      this.debounceCheckForScrollPosition,
    );
    this.debounceCheckForOverflow.cancel();
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container;

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth,
    });
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: 'smooth' });
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }

  buildControls() {
    const { canScrollLeft, canScrollRight } = this.state;
    return (
      <div>
        {canScrollLeft ? (
          <div
            className="left-button"
            onClick={() => {
              this.scrollContainerBy(-window.innerWidth);
            }}
          >
            <img src={leftArrow} alt="left arrow" />
          </div>
        ) : null}

        {canScrollRight ? (
          <div
            className="right-button"
            onClick={() => {
              this.scrollContainerBy(window.innerWidth);
            }}
          >
            <img src={rightArrow} alt="right arrow" />
          </div>
        ) : null}
      </div>
    );
  }

  render() {
    const { section, title } = this.props;
    return (
      <div className="main">
        <div className="title">{section.title}</div>
        <div className="list-main">
          <ul
            className="list"
            ref={(node) => {
              this.container = node;
            }}
          >
            {section.movies.map((e) => (
              <MovieListItem key={`${e.title}-${title}`} movie={e} />
            ))}
          </ul>

          {this.buildControls()}
        </div>
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  section: PropTypes.object.isRequired,
};
