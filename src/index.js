import React from "react";
import ReactDOM from "react-dom";

//import css in order
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import js libraries
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/scss/main.scss";

import reportWebVitals from "./reportWebVitals";

import NavHeader from "./components/NavHeader";
import Home from "./components/home";
import OurService from "./components/services";
import Features from "./components/features";
import Offerings from "./components/offerings";
import Download from "./components/download";
import AboutUs from "./components/aboutUs";
import BackToTop from "./components/backTop";
import TopProgress from "./components/TopProgress";

ReactDOM.render(
  <React.StrictMode>
    <TopProgress />
    <NavHeader />
    <Home />
    <OurService />
    <Features />
    <Offerings />
    <Download />
    <AboutUs />
    <BackToTop />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
