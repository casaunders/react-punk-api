import React from "react";
import "./NavBar.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";

const NavBar = ({
  handleSearch,
  handleABVFilter,
  handleClassicFilter,
  handlePhFilter,
}) => {
  return (
    <div className="navbar">
      <h1 className="navbar__title">Search Our Beers!</h1>
      <div className="navbar__search">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div>
        <Filter
          handleAbvFilter={handleABVFilter}
          handleClassicFilter={handleClassicFilter}
          handlePhFilter={handlePhFilter}
        />
      </div>
    </div>
  );
};

export default NavBar;
