import React from "react";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;
  return (
    <form>
      <label htmlFor={label}>Search Here</label>
      <input
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
      />
    </form>
  );
};

export default SearchBar;
