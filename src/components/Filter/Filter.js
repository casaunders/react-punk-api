import React from "react";
import "./Filter.scss";

const Filter = ({
  handleABVFilter,
  handleClassicFilter,
  handlePhFilter,
  handleIBUFilter,
}) => {
  return (
    <div className="filter">
      <h1>Select Filter:</h1>
      <label>High Alcohol Content: {">"} 6.0%</label>
      <input
        onChange={handleABVFilter}
        type="checkbox"
        name="Aclohol By Vol."
        id="abv"
      />

      <label>Classic Range: Before 2010</label>
      <input
        onChange={handleClassicFilter}
        type="checkbox"
        name="Classic"
        id="first_brewed"
      />

      <label>High Acidity: pH {"<"} 4</label>
      <input onChange={handlePhFilter} type="checkbox" name="pH" id="ph" />

      <label>Bitterness Range: {">"} 50.0%</label>
      <input
        onChange={handleIBUFilter}
        type="checkbox"
        name="Inter. Bitterness Unit"
        id="ibu"
      />
    </div>
  );
};

export default Filter;
