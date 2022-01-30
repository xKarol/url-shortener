import Shortener from "./shortener";

export default function AdvancedStatistics() {
  return (
    <section className="advanced-statistics">
      <Shortener />
      <div className="advanced-statistics__details">
        <h1 className="advanced-statistics__title">Advanced Statistics</h1>
        <p className="advanced-statistics__text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="advanced-statistics__grid">
        <div className="advanced-statistics__box">
          <div className="advanced-statistics__box__icon">
            <img src="images/icon-brand-recognition.svg" alt="icon" />
          </div>
          <h1 className="advanced-statistics__box__title">Brand Recognition</h1>
          <p className="advanced-statistics__box__text">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="advanced-statistics__box">
          <div className="advanced-statistics__box__icon">
            <img src="images/icon-detailed-records.svg" alt="icon" />
          </div>
          <h1 className="advanced-statistics__box__title">Detailed Records</h1>
          <p className="advanced-statistics__box__text">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="advanced-statistics__box">
          <div className="advanced-statistics__box__icon">
            <img src="images/icon-fully-customizable.svg" alt="icon" />
          </div>
          <h1 className="advanced-statistics__box__title">
            Fully Customizable
          </h1>
          <p className="advanced-statistics__box__text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
