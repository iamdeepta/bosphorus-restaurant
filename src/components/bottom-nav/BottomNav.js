import React from "react";
import "./css/bottom-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faReceipt,
  faImage,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BottomNav = () => {
  //   let nav = document.querySelector(".nav");
  //   if (nav !== null) {
  //     nav.querySelectorAll("li .bottom_nav_a").forEach((a, i) => {
  //       a.onclick = (e) => {
  //         if (a.classList.contains("nav-item-active")) return;
  //         nav
  //           .querySelector("li .bottom_nav_a.nav-item-active")
  //           .classList.remove("nav-item-active");

  //         a.classList.add("nav-item-active");

  //         let nav_indicator = nav.querySelector(".nav-indicator");
  //         nav_indicator.style.left = `calc(${i * 80 + 51}px - 45px)`;
  //       };
  //     });
  //   }

  function clickMenu() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_menu").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${0 * 80 + 51}px - 45px)`;
  }

  function clickStories() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_stories").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");

    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${1 * 80 + 51}px - 45px)`;
  }

  function clickHome() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_home").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${2 * 80 + 51}px - 45px)`;
  }

  function clickContact() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_contact").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_about_us")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${3 * 80 + 51}px - 45px)`;
  }

  function clickAboutUs() {
    let nav = document.querySelector(".nav");
    let nav_indicator = nav.querySelector(".nav-indicator");
    nav.querySelector(".bottom_nav_about_us").classList.add("nav-item-active");
    nav.querySelector(".bottom_nav_menu").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_stories")
      .classList.remove("nav-item-active");

    nav.querySelector(".bottom_nav_home").classList.remove("nav-item-active");
    nav
      .querySelector(".bottom_nav_contact")
      .classList.remove("nav-item-active");
    nav_indicator.style.left = `calc(${4 * 80 + 51}px - 45px)`;
  }

  return (
    <>
      <ul className="nav">
        <span className="nav-indicator"></span>

        <li>
          <Link
            to="/menu"
            className="bottom_nav_a bottom_nav_menu"
            id="bottom_nav_menu"
            onClick={clickMenu}
          >
            <FontAwesomeIcon className="navbar_menu_icon" icon={faReceipt} />
            <span className="title">Menu</span>
          </Link>
        </li>

        <li>
          <Link
            to="/stories"
            className="bottom_nav_a bottom_nav_stories"
            onClick={clickStories}
          >
            <FontAwesomeIcon className="navbar_stories_icon" icon={faImage} />
            <span className="title">Stories</span>
          </Link>
        </li>

        <li>
          <Link
            to="/bosphorus"
            className="bottom_nav_a nav-item-active bottom_nav_home"
            id="bottom_nav_home"
            onClick={clickHome}
          >
            <FontAwesomeIcon className="navbar_home_icon" icon={faHome} />
            <span className="title">Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="bottom_nav_a bottom_nav_contact"
            onClick={clickContact}
          >
            <FontAwesomeIcon
              className="navbar_contact_icon"
              icon={faCommentAlt}
            />
            <span className="title">Contact</span>
          </Link>
        </li>

        <li>
          <Link
            to="/about-us"
            className="bottom_nav_a bottom_nav_about_us"
            onClick={clickAboutUs}
          >
            <FontAwesomeIcon className="navbar_about_us_icon" icon={faList} />
            <span className="title">About Us</span>
          </Link>
        </li>

        {/* <li>
          <a href=".">
            <FontAwesomeIcon className="navbar_title_icon" icon={faChair} />
            <span className="title">Book Table</span>
          </a>
        </li> */}
      </ul>
    </>
  );
};

export default BottomNav;
