import React from "react";

const Section = () => {
  return (
    <>
      <div className="shortener">
        <input type="text" placeholder="Shorten a link here..." className="shortener__input" />
        <button className="shortener__button">Shorten It!</button>
      </div>
    </>
  );
};

export default Section;
