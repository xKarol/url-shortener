import React from "react";

const Shortener = () => {
  return (
    <>
      <div className="shortener">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="shortener__input"
        />
        <button className="shortener__button">Shorten It!</button>
      </div>
    </>
  );
};

export default Shortener;
