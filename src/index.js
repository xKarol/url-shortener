import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import Header from "./components/Header.js";
import Section from "./components/Section.js";
import Shortener from "./components/UrlShortener";
import Info from "./components/InfoSection";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Section />
    <Shortener />
    <Info />
  </React.StrictMode>,
  document.getElementById("root")
  
  //   Boost your links
  //today Get Started Features Link Shortening Branded Links Analytics
  //Resources Blog Developers Support Company About Our Team Careers Contact
  //Challenge by Frontend Mentor. Coded by Karol.
);
