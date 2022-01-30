export default function Item({ iconSrc, title, text }) {
  return (
    <article className="advanced-statistics__box">
      <div className="advanced-statistics__box__icon">
        <img src={iconSrc} alt="icon" />
      </div>
      <h1 className="advanced-statistics__box__title">{title}</h1>
      <p className="advanced-statistics__box__text">{text}</p>
    </article>
  );
}
