import React, { Component } from "react";
import "./MovieList.scss";
import MovieListItem from "./MovieListItem/MovieListItem";
import rightArrow from "../../assets/icons/right-arrow.svg";
import leftArrow from "../../assets/icons/left-arrow.svg";

import debounce from "lodash.debounce";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.section.movies,
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false,
    };

    this.checkForOverflow = this.checkForOverflow.bind(this);
    this.checkForScrollPosition = this.checkForScrollPosition.bind(this);

    this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000);
    this.debounceCheckForScrollPosition = debounce(
      this.checkForScrollPosition,
      200
    );

    this.container = null;
  }

  componentDidMount() {
    this.checkForOverflow();
    this.checkForScrollPosition();

    this.container.addEventListener(
      "scroll",
      this.debounceCheckForScrollPosition
    );
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      "scroll",
      this.debounceCheckForScrollPosition
    );
    this.debounceCheckForOverflow.cancel();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow();
      this.checkForScrollPosition();
    }
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container;

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth,
    });
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container;
    const hasOverflow = scrollWidth > clientWidth;

    this.setState({ hasOverflow });
  }

  scrollContainerBy(distance) {
    this.container.scrollBy({ left: distance, behavior: "smooth" });
  }

  buildControls() {
   
    const { canScrollLeft, canScrollRight } = this.state;
    return (
      <div>
        {canScrollLeft ? (
          <div className="left-button" onClick={()=>{this.scrollContainerBy(-window.innerWidth)}}>
            <img src={leftArrow}></img>
          </div>
        ) : null}

        {canScrollRight ? (
          <div className="right-button" onClick={()=>{this.scrollContainerBy(window.innerWidth)}}>
            <img src={rightArrow}></img>
          </div>
        ) : null}
      </div>
    );
  }

  render() {
    return (
      <div className="main">
        <div className="title">{this.props.section.title}</div>
        <div className="list-main">
          <ul
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
          </ul>

          {this.buildControls()}
        </div>
      </div>
    );
  }
}

export default MovieList;
