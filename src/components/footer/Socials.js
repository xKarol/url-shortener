import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export default function Socials() {
  return (
    <section className="footer__socials">
      <a href="/">
        <FaFacebookSquare />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
      <a href="/">
        <FaPinterest />
      </a>
      <a href="/">
        <FaInstagram />
      </a>
    </section>
  );
}
