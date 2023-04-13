import React from "react";
import "./Filter.scss";

const Filter = ({ handleAbvFilter, handleClassicFilter, handlePhFilter }) => {
  return (
    <div className="filter">
      <h1>Select Filter:</h1>
      <label htmlFor="ABV">High Alcohol Content: ABV {">"} 6%</label>
      <input
        onChange={handleAbvFilter}
        type="checkbox"
        name="Aclohol By Vol."
        id="ABV"
      />

      <label htmlFor="Classic Range">Classic Range: Before 2010</label>
      <input
        onChange={handleClassicFilter}
        type="checkbox"
        name="Classic"
        id="Classic"
      />

      <label htmlFor="ph">High Acidity: pH {"<"} 4</label>
      <input onChange={handlePhFilter} type="checkbox" name="pH" id="pH" />
    </div>
  );
};

export default Filter;
