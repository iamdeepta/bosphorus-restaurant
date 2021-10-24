import React from "react";
import "./css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { useState } from "react";
import ReactDOM from "react-dom";

const Sidebar = () => {
  //   const [servicesOpen1, setServicesOpen1] = useState(false);
  //   const [blogOpen1, setBlogOpen1] = useState(false);

  function closeSidebar() {
    let element = document.getElementById("sidebar_div");
    ReactDOM.findDOMNode(element).classList.remove("sidebar_opened");

    let element1 = document.getElementById("sidebar_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("sidebar_blur_bg_opened");

    //   let element1 = document.getElementById("body-overlay");
    //   ReactDOM.findDOMNode(element1).classList.remove("opened");
  }

  //   function servicesOpen() {
  //     setServicesOpen1(!servicesOpen1);
  //   }

  //   function blogOpen() {
  //     setBlogOpen1(!blogOpen1);
  //   }

  return (
    <>
      <div className="sidebar_div" id="sidebar_div">
        <ul className="sidebar_ul">
          <a href="/home" className="sidebar_a">
            <li className="sidebar_li">Home</li>
          </a>
          <hr />
          <a href="/about" className="sidebar_a">
            <li className="sidebar_li">About Us</li>
          </a>
          <hr />

          <a href="/" className="sidebar_a">
            <li className="sidebar_li">Menu</li>
          </a>
          <hr />
          <a href="/" className="sidebar_a">
            <li className="sidebar_li">Stories</li>
          </a>
          <hr />
          <a href="/" className="sidebar_a">
            <li className="sidebar_li">Contact</li>
          </a>
          <hr />
          <a href="/" className="sidebar_a">
            <li className="sidebar_li sidebar_book_table">Book a Table</li>
          </a>
          <hr />
          <a href="/" className="sidebar_a">
            <li className="sidebar_li">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="sidebar_shopping_cart"
              />
            </li>
          </a>
        </ul>
      </div>

      <div
        className="sidebar_blur_bg"
        id="sidebar_blur_bg"
        onClick={() => closeSidebar()}
      ></div>
    </>
  );
};

export default Sidebar;
