import React, { Component } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Navbar from "../../components/NavBar/NavBar";
import MovieList from '../../components/MovieList/MovieList';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar
          index='0'
        />
        <Carrousel/>
        <div className="all-content">
            <MovieList title="Sigue viento tus series y peliculas"/>
            <MovieList title="Amazon Originals"/>
            <MovieList title="Peliculas que te recomendamos"/>
            <MovieList title="Paliculas añadidas recientemente"/>
        </div>
      </div>
    );
  }
}

export default Home;
