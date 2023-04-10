import React from "react";
import "./CardContainer.scss";
import BeerCard from "../../components/BeerCard/BeerCard";

const CardContainer = ({ beers }) => {
  const beerCardJSX = beers.map((beer) => {
    return (
      <BeerCard
        key={beer.id}
        name={beer.name}
        image={beer.image_url}
        tag={beer.tagline}
        alcoholByVol={beer.abv}
      />
    );
  });
  return <div className="card-container">{beerCardJSX}</div>;
};

export default CardContainer;
