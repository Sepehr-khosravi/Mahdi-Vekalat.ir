function ServiceCard({ number, title, description, icon }) {
  return (
    <article className="service-card">
      <div className="service-card__top">
        <span className="service-card__number">{number}</span>

        <span className="service-card__icon">{icon}</span>
      </div>

      <div className="service-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <span className="service-card__arrow">↗</span>
    </article>
  );
}

export default ServiceCard;