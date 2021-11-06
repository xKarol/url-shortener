import React from "react";

const Section = () => {
  return (
    <>
      <section className="section">
        <div className="section__picture" />
        <div className="section__details">
          <h1 className="section__title">More than just shorter links</h1>
          <p className="section__text">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="section__button">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Section;
