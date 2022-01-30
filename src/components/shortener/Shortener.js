import { useState, useContext } from "react";
import ShortenerContext from "../../context/ShortenerContext";
import Loading from "../Loading";

export default function Shortener() {
  const [url, setURL] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setLinks, links } = useContext(ShortenerContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (url.length < 3) return;
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      data = await response.json();
      const shortLink = data.result.full_short_link;
      setLinks([{ mainLink: url, shortLink: shortLink }, ...links]);
      setError("");
    } catch (err) {
      const code = data?.error_code;
      if (!code || code < 0 || code > 10) return setError("Unknown error");

      const errors = [
        "Unknown error", // code_0
        "No URL specified", // code_1
        "Invalid URL submitted", // code_2
        "Rate limit reached. Wait a second and try again", // code_3
        "IP-Address has been blocked because of violating our terms of service", // code_4
        "Shrtcode code already taken/in use. Try Again", // code_5
        "Unknown error", // code_6
        "No code specified", // code_7
        "Invalid code submitted", // code_8
        "Missing required parameters", // code_9
        "Trying to shorten a disallowed Link.", // code_10
      ];
      setError(errors[code]);
    } finally {
      setLoading(false);
      setURL("");
    }
  };

  return (
    <form className="shortener" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Shorten a link here..."
        className={`shortener__input ${error ? "--error" : null}`}
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />
      <button className="shortener__button">
        {loading ? <Loading /> : "Shorten It!"}
      </button>
      {error && <span className="shortener__error">{error}</span>}
    </form>
  );
}
