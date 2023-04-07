import BeerCard from "../components/BeerCard/BeerCard";

const CardContainer = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((beer) => {
        return (
          <BeerCard
            key={beer.id}
            name={beer.name}
            image={beer.image_url}
            line={beer.tagline}
            alcoholByVol={beer.abv}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
