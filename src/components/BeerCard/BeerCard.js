import "./BeerCard.scss";

const BeerCard = ({ name, image, tag, alcoholByVol }) => {
  return (
    <div className="beer-card">
      <img className="beer-card__image" src={image} alt={name} />
      <div>
        <h1 className="beer-card__heading">{name}</h1>
        <h2 className="beer-card__tag">"{tag}"</h2>
        <h3 className="beer-card__abv">Alcohol by Volume: {alcoholByVol}%</h3>
      </div>
    </div>
  );
};

export default BeerCard;
