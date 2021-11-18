import React, { useContext } from "react";
import "./css/header.css";
import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
//import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  // function openSidebar() {
  //   let elements = document.getElementById("sidebar_div");
  //   ReactDOM.findDOMNode(elements).classList.add("sidebar_opened");

  //   let elements1 = document.getElementById("sidebar_blur_bg");
  //   ReactDOM.findDOMNode(elements1).classList.add("sidebar_blur_bg_opened");

  // }

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  function openCart() {
    var bg = document.querySelector(".blur_bg_main");
    bg.classList.add("blur_bg_main_active");

    var cart = document.querySelector(".cart_sidebar_div");
    cart.classList.add("cart_sidebar_div_active");
  }

  return (
    <>
      <header className="header_main">
        <div className="header_main_div container">
          <div className="header_logo_div">
            <Link to="/">
              <img
                src={AppUrl.image_url + "assets/images/logo.webp"}
                alt="logo"
                className="header_logo"
              />
            </Link>
            <Link to="/">
              <h4 className="header_logo_text">Bosphorus</h4>
            </Link>
          </div>

          <Link to="/reservation" className="header_book_table_mbl">
            Book a table
          </Link>
          <FontAwesomeIcon
            icon={faShoppingBasket}
            className="header_cart_mbl"
            onClick={() => openCart()}
          />
          {cartItems.length > 0 && (
            <span className="header_product_count_mbl">{cartItems.length}</span>
          )}

          <div className="header_menu_div">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/stories">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/reservation">Book a table</Link>
              </li>
              <li onClick={() => openCart()}>
                {/* <a href="."> */}
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="header_shopping_cart"
                />
                {/* </a> */}
                {cartItems.length > 0 && (
                  <span className="header_product_count">
                    {cartItems.length}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
