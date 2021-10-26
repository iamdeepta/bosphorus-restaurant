import React from "react";
import "./css/header.css";
import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Header = () => {
  function openSidebar() {
    let elements = document.getElementById("sidebar_div");
    ReactDOM.findDOMNode(elements).classList.add("sidebar_opened");

    let elements1 = document.getElementById("sidebar_blur_bg");
    ReactDOM.findDOMNode(elements1).classList.add("sidebar_blur_bg_opened");

    //   let element1 = document.getElementById("body-overlay");
    //   ReactDOM.findDOMNode(element1).classList.remove("opened");
  }

  return (
    <>
      <header className="header_main">
        <div className="header_main_div container">
          <div className="header_logo_div">
            <Link to="/bosphorus">
              <img
                src={AppUrl.image_url + "assets/images/logo.png"}
                alt="logo"
                className="header_logo"
              />
            </Link>
            <Link to="/bosphorus">
              <h4 className="header_logo_text">Bosphorus</h4>
            </Link>
          </div>

          <FontAwesomeIcon
            icon={faHamburger}
            className="hamburger_menu"
            onClick={() => openSidebar()}
          />

          <div className="header_menu_div">
            <ul>
              <li>
                <Link to="/bosphorus">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/stories">Stories</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/reservation">Book a table</Link>
              </li>
              <li>
                <a href=".">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
