import React from 'react';
import Carrousel from '../../components/Carrousel/Carrousel';
import Navbar from '../../components/NavBar/NavBar';
import MovieList from '../../components/MovieList/MovieList';
import '../Home/Home.scss';
import Footer from '../../components/Footer/Footer';

import MovieListVideo from '../../components/MovieListVideo/MovieListVideo';


// Dummy Data
import { moviesLists } from '../../utils/dummy-data';

const Infantil = () => (
  <div>
    <Navbar index={3} />

    <div className="all-content">
      <Carrousel />

      {moviesLists.map((e) => (
        <MovieList key={e.title} section={e} />
      ))}

      <MovieListVideo />

      {moviesLists.map((e) => (
        <MovieList key={e.title} section={e} />
      ))}

      <Footer />
    </div>
  </div>
);

export default Infantil;
