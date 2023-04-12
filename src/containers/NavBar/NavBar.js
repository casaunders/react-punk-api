import React from "react";
import "./NavBar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const NavBar = ({ handleSearch }) => {
  return (
    <div className="navbar">
      <h1 className="navbar__title">Search Our Beers!</h1>
      <div className="navbar__search">
        <SearchBar handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default NavBar;
