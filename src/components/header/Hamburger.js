import { useEffect } from "react";

export default function Hamburger({ setOpenHamburger, hamburgerOpened }) {
  useEffect(() => {
    if (hamburgerOpened) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [hamburgerOpened]);

  return (
    <div
      className={`header__hamburger ${hamburgerOpened ? "--active" : null}`}
      onClick={() => setOpenHamburger(!hamburgerOpened)}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
