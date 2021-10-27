import React from "react";
import "./css/about-us.css";
import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <>
      <section className="about_us_section">
        <div className="about_us_inside container">
          <img
            className="about_us_left_image"
            src={AppUrl.image_url + "assets/images/about_us.webp"}
            alt="chef"
            data-aos="fade-right"
            data-aos-delay="0"
          />
          <div className="about_us_right_content">
            <p className="about_us_text" data-aos="fade-up" data-aos-delay="0">
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
            >
              We are serving authentic imported Turkish Baklava, Kunafa.
              Lahmacun and Mediterranean delicacy. Also serving Thai brand
              "After You" products. Stop by to enjoy variety of delectable nuts
              and dried fruits available at our signature store.
            </p>
            <div
              className="about_us_list_point1"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <span>
                <FontAwesomeIcon
                  className="about_us_list_point_icon"
                  icon={faCheckCircle}
                />
              </span>
              <span className="about_us_list_point_name">
                Best service than others
              </span>
            </div>
            <div
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
              <span className="about_us_list_point_name">Experience stuff</span>
            </div>
            <div
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
            </div>
            <div
              className="about_us_read_more_btn_div"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <a href="." className="about_us_read_more_btn">
                Read More
              </a>
            </div>

            <div className="about_us_numbers">
              <div
                className="about_us_menu_numbers_div"
                data-aos="fade-up"
                data-aos-delay="140"
              >
                <p className="about_us_menu_numbers">100</p>
                <p className="about_us_menu_text">Menus/Dish</p>
              </div>
              <div className="about_us_numbers_vertical_line"></div>
              <div
                className="about_us_stuff_numbers_div"
                data-aos="fade-up"
                data-aos-delay="160"
              >
                <p className="about_us_stuff_numbers">50</p>
                <p className="about_us_stuff_text">Stuffs</p>
              </div>
              <div className="about_us_numbers_vertical_line"></div>
              <div
                className="about_us_customer_numbers_div"
                data-aos="fade-up"
                data-aos-delay="180"
              >
                <p className="about_us_customer_numbers">1000</p>
                <p className="about_us_customer_text">Happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
