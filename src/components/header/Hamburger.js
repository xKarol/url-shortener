import { useContext, useEffect } from "react";
import HeaderContext from "../../context/HeaderContext";

export default function Hamburger() {
  const { setOpenHamburger, hamburgerOpened } = useContext(HeaderContext);

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
