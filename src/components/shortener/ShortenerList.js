import { useContext } from "react";
import ShortenerContext from "../../context/ShortenerContext";
import ListItem from "./ListItem";

export default function ShortenerList() {
  const { links } = useContext(ShortenerContext);
  return (
    <>
      {links && (
        <ul className="shortener__links">
          {links.map((data, index) => (
            <ListItem {...data} key={index} />
          ))}
        </ul>
      )}
    </>
  );
}
