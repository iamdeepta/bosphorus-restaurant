import React from "react";
import "./css/header.css";
import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

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
            <a href=".">
              <img
                src={AppUrl.image_url + "assets/images/logo.jpg"}
                alt="logo"
                className="header_logo"
              />
            </a>
            <a href=".">
              <h4 className="header_logo_text">Bosphorus</h4>
            </a>
          </div>

          <FontAwesomeIcon
            icon={faHamburger}
            className="hamburger_menu"
            onClick={() => openSidebar()}
          />

          <div className="header_menu_div">
            <ul>
              <li>
                <a href=".">Home</a>
              </li>
              <li>
                <a href=".">About Us</a>
              </li>
              <li>
                <a href=".">Menu</a>
              </li>
              <li>
                <a href=".">Stories</a>
              </li>
              <li>
                <a href=".">Contact</a>
              </li>
              <li>
                <a href=".">Book a table</a>
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
