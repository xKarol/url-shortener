import { useState } from "react";
import ShortenerContext from "../../context/ShortenerContext";
import Shortener from "./Shortener";
import ShortenerList from "./ShortenerList";

export default function ShortenerForm() {
  const [links, setLinks] = useState([]);

  return (
    <ShortenerContext.Provider value={{ setLinks, links }}>
      <Shortener />
      <ShortenerList />
    </ShortenerContext.Provider>
  );
}
