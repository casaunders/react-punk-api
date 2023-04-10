import React from "react";
import CardContainer from "../../containers/CardContainer/CardContainer";
import "./Main.scss";

const Main = ({ beers }) => {
  return (
    <div className="main">
      <CardContainer beers={beers} />
    </div>
  );
};

export default Main;
