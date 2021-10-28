import React from "react";
import "./css/footer.css";
import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="footer_section_inside container">
          <div
            className="footer_first_column"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="footer_first_column_logo_div">
              <Link to="/bosphorus">
                <img
                  className="footer_first_column_logo"
                  src={AppUrl.image_url + "assets/images/logo.webp"}
                  alt="logo"
                />
              </Link>
              <Link to="/bosphorus" className="footer_first_column_logo_text">
                Bosphorus
              </Link>
            </div>

            <div className="footer_first_column_location_div">
              <FontAwesomeIcon
                className="footer_first_column_location_icon"
                icon={faLocationArrow}
              />

              <p className="footer_first_column_location_text">
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="footer_first_column_phone_div">
              <FontAwesomeIcon
                className="footer_first_column_phone_icon"
                icon={faPhone}
              />
              <a href="." className="footer_first_column_phone_text">
                0178273526
              </a>
            </div>

            <div className="footer_first_column_email_div">
              <FontAwesomeIcon
                className="footer_first_column_email_icon"
                icon={faEnvelope}
              />
              <a href="." className="footer_first_column_email_text">
                support@bosphorus.com
              </a>
            </div>

            <div className="footer_first_column_social_media_div">
              <a href="." className="footer_first_column_social_media_fb">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="." className="footer_first_column_social_media_twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="."
                className="footer_first_column_social_media_instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="."
                className="footer_first_column_social_media_pinterest"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>

          <div className="footer_menus_div">
            <div
              className="footer_second_column"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {/* <a href="." className="footer_second_column_service">
              Service
            </a> */}
              <Link
                to="/bosphorus"
                className="footer_second_column_service_child"
              >
                Home
              </Link>
              <Link to="/menu" className="footer_second_column_service_child">
                Menu
              </Link>
              {/* <Link
                to="/contact"
                className="footer_second_column_service_child"
              >
                Contact
              </Link> */}
              {/* <a href="." className="footer_second_column_service_child">
              Menu
            </a> */}
            </div>

            <div
              className="footer_second_column"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {/* <a href="." className="footer_second_column_service">
              Service
            </a> */}
              {/* <Link
                to="/bosphorus"
                className="footer_second_column_service_child"
              >
                Home
              </Link>
              <Link to="/menu" className="footer_second_column_service_child">
                Menu
              </Link> */}
              <Link
                to="/contact"
                className="footer_second_column_service_child"
              >
                Contact
              </Link>
              <Link
                to="/about-us"
                className="footer_third_column_company_child"
              >
                About us
              </Link>
              {/* <a href="." className="footer_second_column_service_child">
              Menu
            </a> */}
            </div>

            <div
              className="footer_third_column"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* <a href="." className="footer_third_column_company">
              Company
            </a> */}

              <Link to="/stories" className="footer_third_column_company_child">
                Gallery
              </Link>
              <Link
                to="/reservation"
                className="footer_third_column_company_child"
              >
                Book a table
              </Link>
              {/* <a href="." className="footer_third_column_company_child">
              New users FAQ
            </a> */}
            </div>

            {/* <div className="footer_fourth_column">
            <a href="." className="footer_fourth_column_supports">
              Supports
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Help center
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Feedback
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Contact us
            </a>
            <a href="." className="footer_fourth_column_supports_child">
              Terms conditions
            </a>
          </div> */}

            {/* <div className="footer_fifth_column">
            <a href="." className="footer_fifth_column_resources">
              Resources
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              Open hours
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              Blogs
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              What's new
            </a>
            <a href="." className="footer_fifth_column_resources_child">
              Sitemap
            </a>
          </div> */}
          </div>
        </div>
      </section>

      <section className="footer_bottom_section">
        <div className="footer_bottom_inside container">
          <div className="footer_bottom_left">
            <p className="footer_bottom_left_text">
              © 2021 Bosphorus - All rights reserved.
            </p>
          </div>
          <div className="footer_bottom_right">
            <a href="." className="footer_bottom_right_privacy">
              Privacy
            </a>
            <a href="." className="footer_bottom_right_security">
              Security
            </a>
            <a href="." className="footer_bottom_right_terms">
              Terms
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
