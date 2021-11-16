import React, { useState, useEffect } from "react";
import "./css/about-us.css";
//import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AboutUsSvg from "./AboutUsSvg";
import { Link } from "react-router-dom";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "aboutGet")
      .then(function (response) {
        if (response) {
          setData(response.data);
          setData1(response.data[0].about_list.split(","));
          // setLoader(false);
          //console.log(response.data[0].about_list.split(","));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <section className="about_us_section">
        <div className="about_us_inside container">
          {/* <img
            className="about_us_left_image"
            src={AppUrl.image_url + "assets/images/about_us.webp"}
            alt="chef"
            data-aos="fade-right"
            data-aos-delay="0"
          /> */}
          <AboutUsSvg />
          {data.map((item) => (
            <div className="about_us_right_content">
              <p
                className="about_us_text"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                ABOUT US
              </p>
              <h2
                className="about_us_restaurant_name"
                data-aos="fade-up"
                data-aos-delay="20"
              >
                Bosphorus Restaurant
              </h2>

              <p
                className="about_us_description"
                data-aos="fade-up"
                data-aos-delay="40"
                key={item.about_id}
              >
                {item.about_description}
              </p>

              <div>
                {data1.map((item1, index) => (
                  <div
                    className="about_us_list_point1"
                    data-aos="fade-up"
                    data-aos-delay="60"
                    key={index}
                  >
                    <span>
                      <FontAwesomeIcon
                        className="about_us_list_point_icon"
                        icon={faCheckCircle}
                      />
                    </span>
                    <span className="about_us_list_point_name">{item1}</span>
                  </div>
                ))}
              </div>

              {/* <div
                className="about_us_list_point2"
                data-aos="fade-up"
                data-aos-delay="80"
              >
                <span>
                  <FontAwesomeIcon
                    className="about_us_list_point_icon"
                    icon={faCheckCircle}
                  />
                </span>
                <span className="about_us_list_point_name">
                  Experience stuff
                </span>
              </div> */}
              {/* <div
                className="about_us_list_point3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span>
                  <FontAwesomeIcon
                    className="about_us_list_point_icon"
                    icon={faCheckCircle}
                  />
                </span>
                <span className="about_us_list_point_name">
                  Quality guarantee
                </span>
              </div> */}
              <div
                className="about_us_read_more_btn_div"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                <Link to="/about-us" className="about_us_read_more_btn">
                  Read More
                </Link>
              </div>

              <div className="about_us_numbers">
                <div
                  className="about_us_menu_numbers_div"
                  data-aos="fade-up"
                  data-aos-delay="140"
                >
                  <p className="about_us_menu_numbers">{item.about_menu}</p>
                  <p className="about_us_menu_text">Menus/Dish</p>
                </div>
                <div className="about_us_numbers_vertical_line"></div>
                <div
                  className="about_us_stuff_numbers_div"
                  data-aos="fade-up"
                  data-aos-delay="160"
                >
                  <p className="about_us_stuff_numbers">{item.about_stuff}</p>
                  <p className="about_us_stuff_text">Stuffs</p>
                </div>
                <div className="about_us_numbers_vertical_line"></div>
                <div
                  className="about_us_customer_numbers_div"
                  data-aos="fade-up"
                  data-aos-delay="180"
                >
                  <p className="about_us_customer_numbers">
                    {item.about_customer}
                  </p>
                  <p className="about_us_customer_text">Happy customers</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
