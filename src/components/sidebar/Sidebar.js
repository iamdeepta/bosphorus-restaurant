import React from "react";
import "./css/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
//import { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

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
          <Link to="/bosphorus" className="sidebar_a">
            <li className="sidebar_li">Home</li>
          </Link>
          <hr />
          <Link to="/about-us" className="sidebar_a">
            <li className="sidebar_li">About Us</li>
          </Link>
          <hr />

          <Link to="/menu" className="sidebar_a">
            <li className="sidebar_li">Menu</li>
          </Link>
          <hr />
          <a href="/" className="sidebar_a">
            <li className="sidebar_li">Stories</li>
          </a>
          <hr />
          <Link to="/contact" className="sidebar_a">
            <li className="sidebar_li">Contact</li>
          </Link>
          <hr />
          <Link to="/reservation" className="sidebar_a">
            <li className="sidebar_li sidebar_book_table">Book a Table</li>
          </Link>
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
