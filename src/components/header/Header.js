import React from "react";
import "./css/header.css";
import AppUrl from "../../classes/AppUrl";

const Header = () => {
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
