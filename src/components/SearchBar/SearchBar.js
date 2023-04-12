import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleSearch }) => {
  return (
    <form className="searchbar">
      <input type="text" placeholder="Search Beers" onInput={handleSearch} />
    </form>
  );
};

export default SearchBar;
