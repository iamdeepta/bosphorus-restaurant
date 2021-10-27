import React from "react";
import "./css/bottom-nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faReceipt,
  faImage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BottomNav = () => {
  let nav = document.querySelector(".nav");
  //console.log(nav);
  if (nav !== null) {
    nav.querySelectorAll("li .bottom_nav_a").forEach((a, i) => {
      a.onclick = (e) => {
        if (a.classList.contains("nav-item-active")) return;
        nav
          .querySelector("li .bottom_nav_a.nav-item-active")
          .classList.remove("nav-item-active");

        a.classList.add("nav-item-active");

        let nav_indicator = nav.querySelector(".nav-indicator");
        nav_indicator.style.left = `calc(${i * 80 + 51}px - 45px)`;
      };
    });
  }

  return (
    <>
      <ul className="nav">
        <span className="nav-indicator"></span>

        <li>
          <Link to="/about-us" className="bottom_nav_a">
            <FontAwesomeIcon className="navbar_about_us_icon" icon={faList} />
            <span className="title">About Us</span>
          </Link>
        </li>

        <li>
          <Link to="/menu" className="bottom_nav_a">
            <FontAwesomeIcon className="navbar_menu_icon" icon={faReceipt} />
            <span className="title">Menu</span>
          </Link>
        </li>

        <li>
          <Link to="/bosphorus" className="bottom_nav_a nav-item-active">
            <FontAwesomeIcon className="navbar_home_icon" icon={faHome} />
            <span className="title">Home</span>
          </Link>
        </li>

        <li>
          <Link to="/stories" className="bottom_nav_a">
            <FontAwesomeIcon className="navbar_stories_icon" icon={faImage} />
            <span className="title">Stories</span>
          </Link>
        </li>

        <li>
          <Link to="/contact" className="bottom_nav_a">
            <FontAwesomeIcon
              className="navbar_contact_icon"
              icon={faEnvelope}
            />
            <span className="title">Contact</span>
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
