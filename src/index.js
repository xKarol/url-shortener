import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import Header from "./components/Header.js";
import Section from "./components/Section.js";
import Shortener from "./components/UrlShortener.js";
import Info from "./components/InfoSection.js";
import Footer from "./components/Footer.js";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Section />
    <Shortener />
    <Info />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
