import React, { useState } from "react";
import Loading from "./Loading.js";
import copy from "copy-to-clipboard";

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);

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
      const code = data.error_code;
      if (code < 0 || code > 10) {
        setError("Wystąpił niespodziewany problem...");
      } else {
        const errors = [
          "Wystąpił niespodziewany problem...", // code_0
          "Nie wprowadziłeś żadnego linku", // code_1
          "Wprowadzono nieprawidłowy adres URL", // code_2
          "Odczekaj chwilę", // code_3
          "Adres IP został zablokowany z powodu naruszenia warunków korzystania z usługi", // code_4
          "Wygenerowany kod jest już zajęty. Spróbuj ponownie...", // code_5
          "Wystąpił niespodziewany problem...", // code_6
          "Nie określono kodu (parametr „code” jest pusty)", // code_7
          "Wprowadzono nieprawidłowy adres URL", // code_8
          "Brak wymaganych parametrów", // code_9
          "Tego linku nie można skrócić", // code_10
        ];
        setError(errors[code]);
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
          className={error ? "shortener__input --error" : "shortener__input"}
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
            <Link
              {...data}
              key={index}
              copy={(index) => copy(data.short_link)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Shortener;

const Link = ({ main_link, short_link, copy }) => {
  const [copied, setCopied] = useState(false);
  const copyLink = () => {
    copy();
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <>
      <li className="shortener__link-box">
        <h1 className="shortener__link">{main_link}</h1>
        <div className="shortener__right-side">
          <a className="shortener__link__shorten" href={short_link}>
            {short_link}
          </a>
          <button
            className={
              copied
                ? "shortener__button --list --copied"
                : "shortener__button --list"
            }
            onClick={copied ? null : copyLink}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </li>
    </>
  );
};
