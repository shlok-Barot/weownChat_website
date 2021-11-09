import React, { useState, useEffect } from "react";
import siteLogo from "../assets/images/W_Logo.png";
import classnames from "classnames";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import $ from "jquery";

const NavHeader = () => {
  const [activeTab, setActiveTab] = useState("1");
  const tabstoggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    $(document).ready(function () {
      $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top,
            },
            1000,
            "swing",
            // function () {
            //   // window.location.hash = target;
            // }
          );
      });
    });
  }, []);
  return (
    <div className="menu_navbar">
      <Navbar color="light" light expand="md" className="bgnd-color">
        <div className="menu-backgrnd">
          <img src={siteLogo} alt="logo" />
        </div>
        <NavbarToggler />
        <Collapse navbar>
          <Nav
            className="mr-auto justify-content-end w-100 nav_menu"
            navbar
            id="mainNav"
          >
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabstoggle("1");
                }}
                href="#home"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabstoggle("2");
                }}
                href="#ourServices"
              >
                Our Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => {
                  tabstoggle("3");
                }}
                href="#Features"
              >
                Features
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "4" })}
                onClick={() => {
                  tabstoggle("4");
                }}
                href="#Offerings"
              >
                Offerings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "5" })}
                onClick={() => {
                  tabstoggle("5");
                }}
                href="#Download"
              >
                Download
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "6" })}
                onClick={() => {
                  tabstoggle("6");
                }}
                href="#AboutUs"
              >
                About Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;
