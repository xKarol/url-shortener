import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
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
          <div className="header__hamburger --active">
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
