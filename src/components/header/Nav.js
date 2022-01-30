import NavLink from "./NavLink";

export default function Nav({ hamburgerOpened }) {
  return (
    <nav className={`header__nav ${hamburgerOpened ? "--hamburger" : null}`}>
      <NavLink name={"Features"} />
      <NavLink name={"Pircing"} />
      <NavLink name={"Resources"} />
    </nav>
  );
}
