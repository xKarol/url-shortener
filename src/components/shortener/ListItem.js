import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export default function ListItem({ mainLink, shortLink }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    if (copied) return;
    copy(shortLink);
    setCopied(true);
  };

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [copied]);

  return (
    <>
      <li className="shortener__link-box">
        <h1 className="shortener__link">{mainLink}</h1>
        <div className="shortener__right-side">
          <a
            className="shortener__link__shorten"
            href={shortLink}
            target="_blank"
            rel="noreferrer"
          >
            {shortLink}
          </a>
          <button
            className={`shortener__button --list ${copied ? "--copied" : null}`}
            onClick={copyLink}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </li>
    </>
  );
}
