import React from "react";
import "./css/header-top.css";

const HeaderTop = () => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header_top_main");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <>
      <div className="header_top_main">
        <div className="header_top_main_div container">
          <div className="header_top_phone_div">
            <i className="fa fa-phone"></i>
            <p className="header_top_phone">01841-993788</p>
          </div>
          <div className="header_top_email_div">
            <i className="fa fa-paper-plane"></i>
            <p className="header_top_email">bosphoruscafebd@gmail.com</p>
          </div>
          <div className="header_top_open_hours_div">
            <p className="header_top_open_hours">
              Open Hours: Monday - Sunday 8.00 AM - 9.00 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
