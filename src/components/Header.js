import { useState, useEffect } from "react";
import Logo from "./Logo.js";

export default function Header() {
  const [hamburgerOpened, setOpenHamburger] = useState(false);

  useEffect(() => {
    if (hamburgerOpened) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  return (
    <>
      <header className="header">
        <div className="header__left-side">
          <Logo className="header__logo" />
          <nav className="header__links">
            <a href="/">Features</a>
            <a href="/">Pircing</a>
            <a href="/">Resources</a>
          </nav>
        </div>
        <div className="header__right-side">
          <button className="header__button sign-in">Login</button>
          <button className="header__button">Sign Up</button>
          <div
            className={
              hamburgerOpened
                ? "header__hamburger --active"
                : "header__hamburger"
            }
            onClick={() => setOpenHamburger(!hamburgerOpened)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>
      <nav
        className={
          hamburgerOpened ? "hamburger__menu --active" : "hamburger__menu"
        }
      >
        <a href="/" className="hamburger__menu__link">
          Features
        </a>
        <a href="/" className="hamburger__menu__link">
          Pircing
        </a>
        <a href="/" className="hamburger__menu__link">
          Resources
        </a>
      </nav>
    </>
  );
}
