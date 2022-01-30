import { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import NavLink from "./NavLink";

export default function Nav() {
  const { hamburgerOpened } = useContext(HeaderContext);
  return (
    <nav className={`header__nav ${hamburgerOpened ? "--hamburger" : null}`}>
      <NavLink name={"Features"} />
      <NavLink name={"Pircing"} />
      <NavLink name={"Resources"} />
    </nav>
  );
}
