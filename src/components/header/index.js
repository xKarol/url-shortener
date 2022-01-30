import { useState } from "react";
import Nav from "./Nav.js";
import Logo from "../Logo.js";
import Hamburger from "./Hamburger.js";
import AuthButtons from "./AuthButtons.js";

export default function Header() {
  const [hamburgerOpened, setOpenHamburger] = useState(false);

  return (
    <header className="header">
      <div className="header__left-side">
        <Logo className="header__logo" />
        <Nav hamburgerOpened={hamburgerOpened} />
      </div>
      <div className="header__right-side">
        <AuthButtons />
        <Hamburger
          setOpenHamburger={setOpenHamburger}
          hamburgerOpened={hamburgerOpened}
        />
      </div>
    </header>
  );
}
