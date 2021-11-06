import React from "react";

const Info = () => {
  return (
    <>
      <section className="info-section">
        <div className="info-section__details">
          <h1 className="info-section__title">Advanced Statistics</h1>
          <p className="info-section__text">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="info-section__grid">
          <div className="info-section__box">
            <div className="info-section__box__icon">
              <img src="/images/icon-brand-recognition.svg" alt="icon" />
            </div>
            <h1 className="info-section__box__title">Brand Recognition</h1>
            <p className="info-section__box__text">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="info-section__box">
            <div className="info-section__box__icon">
              <img src="/images/icon-detailed-records.svg" alt="icon" />
            </div>
            <h1 className="info-section__box__title">Detailed Records</h1>
            <p className="info-section__box__text">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="info-section__box">
            <div className="info-section__box__icon">
              <img src="/images/icon-fully-customizable.svg" alt="icon" />
            </div>
            <h1 className="info-section__box__title">Fully Customizable</h1>
            <p className="info-section__box__text">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
