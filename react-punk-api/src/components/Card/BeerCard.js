const BeerCard = ({ name, image, line, alcoholByVol }) => {
  return (
    <div className="profile-card">
      <img className="profile-card__image" src={image} alt={name} />
      <div className="profile-card__content">
        <h2 className="profile-card__heading">{name}</h2>
        <a href={"About"}>{line}</a>
        <a href={"%"}>{alcoholByVol}</a>
      </div>
    </div>
  );
};

export default BeerCard;
