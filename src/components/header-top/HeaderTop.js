import React, { useState, useEffect } from "react";
import "./css/header-top.css";
import { BsTelephone } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const HeaderTop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "aboutGet")
      .then(function (response) {
        if (response) {
          setData(response.data);
          // setLoader(false);
          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header_top_main");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <>
      <div className="header_top_main">
        <div className="header_top_main_div container">
          <div className="header_top_phone_div">
            <BsTelephone className="header_top_phone_icon" />
            {data.map((item) => (
              <p className="header_top_phone" key={item.about_id}>
                {item.about_phone}
              </p>
            ))}
          </div>
          <div className="header_top_email_div">
            <FiSend className="header_top_mail_icon" />
            {data.map((item) => (
              <p className="header_top_email" key={item.about_id}>
                {item.about_email}
              </p>
            ))}
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
