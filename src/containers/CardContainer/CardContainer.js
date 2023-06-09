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
        abv={beer.abv}
        ph={beer.ph}
        ibu={beer.ibu}
      />
    );
  });
  return <div className="cardcontainer">{beerCardJSX}</div>;
};

export default CardContainer;
