import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.scss';
import SearchComponent from './SearchComponent/SearchComponent';
import { Link } from 'react-router-dom';

const items = [
  {
    title: 'Inicio',
    route: '/',
  },
  {
    title: 'Series',
    route: '/series',
  },
  {
    title: 'Peliculas',
    route: '/peliculas',
  },
  {
    title: 'Infantil',
    route: '/infantil',
  },
];

const NavBar = (props) => {
  const { index } = props;

  const currentIndex = index;

  const getItem = (iindex) => {
    return (
      <li
        className={currentIndex === iindex ? 'item-selected' : ''}
        // onClick={() => props.changePage(index)}
      >
        <Link to={items[iindex].route}>{items[iindex].title}</Link>
      </li>
    );
  }

  return (
    <div className="main-nav">
      <div className="options ">
        <div>
          <img
            src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div>
          <ul>
            {getItem(0)}
            {getItem(1)}
            {getItem(2)}
            {getItem(3)}
          </ul>
        </div>
      </div>

      <SearchComponent />
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  index: PropTypes.number.isRequired,
};
