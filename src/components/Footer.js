import React from "react";
import Logo from "./Logo.js";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Logo fill="#fff" className="footer__logo" />
        <div className="footer__links">
          <h1 className="footer__link-title">Features</h1>
          <a href="/" className="footer__link">
            Link Shortening
          </a>
          <a href="/" className="footer__link">
            Branded Links
          </a>
          <a href="/" className="footer__link">
            Analytics
          </a>
        </div>
        <div className="footer__links">
          <h1 className="footer__link-title">Resources</h1>
          <a href="/" className="footer__link">
            Blog
          </a>
          <a href="/" className="footer__link">
            Developers
          </a>
          <a href="/" className="footer__link">
            Support
          </a>
        </div>
        <div className="footer__links">
          <h1 className="footer__link-title">Company</h1>
          <a href="/" className="footer__link">
            About
          </a>
          <a href="/" className="footer__link">
            Our Team
          </a>
          <a href="/" className="footer__link">
            Careers
          </a>
          <a href="/" className="footer__link">
            Contact
          </a>
        </div>
        <div className="footer__socials">
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Pinterest />
          </a>
          <a href="/">
            <Instagram />
          </a>
        </div>
        <span>
          Challenge by
          <a href="https://www.frontendmentor.io/home"> Frontend Mentor</a>.
          Coded by
          <a href="https://github.com/xKarol"> Karol</a>.
        </span>
      </footer>
    </>
  );
};

export default Footer;

const Facebook = styled(FaFacebookSquare)`
  color: #fff;
`;
const Instagram = styled(FaInstagram)`
  color: #fff;
`;
const Twitter = styled(FaTwitter)`
  color: #fff;
`;
const Pinterest = styled(FaPinterest)`
  color: #fff;
`;
