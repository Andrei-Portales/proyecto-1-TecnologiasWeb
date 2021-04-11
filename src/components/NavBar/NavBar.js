import React from "react";
import "./NavBar.scss";
import SearchComponent from "./SearchComponent/SearchComponent";

const items = [
  {
    title: "Inicio",
  },
  {
    title: "Series",
  },
  {
    title: "Peliculas",
  },
  {
    title: "Infantil",
  },
];

const NavBar = (props) => {
  const currentIndex = props.index;

  const getItem = (index) => {
    return (
      <li
        className={currentIndex == index ? "item-selected" : ""}
        // onClick={() => props.changePage(index)}
      >
        <a href="#">{items[index].title}</a>
      </li>
    );
  };

  return (
    <div className="main-nav">
      <div className="options d-flex flex-row">
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
