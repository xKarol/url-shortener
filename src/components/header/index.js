import { useState } from "react";
import Nav from "./Nav.js";
import Logo from "../Logo.js";
import Hamburger from "./Hamburger.js";
import AuthButtons from "./AuthButtons.js";
import HeaderContext from "../../context/HeaderContext";

export default function Header() {
  const [hamburgerOpened, setOpenHamburger] = useState(false);

  return (
    <HeaderContext.Provider value={{ setOpenHamburger, hamburgerOpened }}>
      <header className="header">
        <div className="header__left-side">
          <Logo className="header__logo" />
          <Nav />
        </div>
        <div className="header__right-side">
          <AuthButtons />
          <Hamburger />
        </div>
      </header>
    </HeaderContext.Provider>
  );
}
