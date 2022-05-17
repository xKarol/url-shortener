import Logo from "../Logo.js";
import Nav from "./Nav.js";
import NavLink from "./NavLink.js";
import Socials from "./Socials.js";

export default function Footer() {
  return (
    <footer className="footer">
      <Logo fill="#fff" className="footer__logo" />
      <section className="footer__nav-container">
        <Nav title={"Features"}>
          <NavLink name={"Link Shortening"} />
          <NavLink name={"Branded Links"} />
          <NavLink name={"Analytics"} />
        </Nav>
        <Nav title={"Resources"}>
          <NavLink name={"Blog"} />
          <NavLink name={"Developers"} />
          <NavLink name={"Support"} />
        </Nav>
        <Nav title={"Company"}>
          <NavLink name={"About"} />
          <NavLink name={"Our Team"} />
          <NavLink name={"Careers"} />
          <NavLink name={"Contact"} />
        </Nav>
      </section>

      <Socials />
      <span>
        Challenge by
        <a href="https://www.frontendmentor.io/home"> Frontend Mentor</a>. Coded
        by
        <a href="https://github.com/xKarol"> Karol</a>.
      </span>
    </footer>
  );
}
