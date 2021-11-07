import React, { useState } from "react";
import Loading from "./Loading.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Shortener = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

  // const copyLink = (id) => {
  //   console.log(id);
  //   CopyToClipboard("test");
  // };

  const checkForm = () => {
    if (url.length < 3) {
      setError("Nieprawidłowa długość linku.");
    } else {
      setLoading(true);
      requestAPI();
      setUrl("");
      setError("");
    }
  };

  const requestAPI = async () => {
    let data;
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      data = await res.json();
      const shortLink = data.result.full_short_link;
      setLinks([...links, { main_link: url, short_link: shortLink }]);
    } catch {
      if (data.error_code === 2) {
        setError("Wprowadzony link jest nieprawidłowy.");
      } else {
        setError("Wystąpił niespodziewany problem...");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="shortener">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="shortener__input"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        {error && <span className="shortener__error">{error}</span>}
        <button className="shortener__button" onClick={checkForm}>
          {loading ? <Loading /> : "Shorten It!"}
        </button>
      </div>
      {links && (
        <ul className="shortener__links">
          {links.map((data, index) => (
            <Link {...data} key={index} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Shortener;

const Link = ({ main_link, short_link }) => {
  return (
    <>
      <li className="shortener__link-box">
        <h1 className="shortener__link">{main_link}</h1>
        <div className="shortener__right-side">
          <a className="shortener__link__shorten" href={short_link}>
            {short_link}
          </a>
          <button className="shortener__button --list">
            Copy
          </button>
        </div>
      </li>
    </>
  );
};
