import React, { Component } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Navbar from "../../components/NavBar/NavBar";
import MovieList from "../../components/MovieList/MovieList";
import "./Home.scss";

// Dummy Data
import { moviesLists } from "../../utils/dummy-data";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar index="0" />

        <div className="all-content">
          <Carrousel />
          {moviesLists.map((e) => (
            <MovieList key={e.title} section={e} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
