import React from "react";
import "./css/contact.css";
import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <section className="contact_section">
        <h2 className="contact_us_text" data-aos="fade-down" data-aos-delay="0">
          Contact Us
        </h2>
        <img
          className="contact_map"
          src={AppUrl.image_url + "assets/images/bosphorus-map.png"}
          alt="map"
        />
        <img
          className="contact_location"
          src={AppUrl.image_url + "assets/images/location.png"}
          alt="location"
        />
        <div className="contact_inside container">
          <div
            className="contact_form"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            <p className="contact_form_text">Contact Form</p>
            <input
              type="text"
              className="contact_full_name"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="contact_email"
              placeholder="Enter Your Email"
            />
            <input
              type="text"
              className="contact_subject"
              placeholder="Subject"
            />
            <textarea
              name="contact_message"
              className="contact_message"
              id="contact_message"
              cols="30"
              rows="4"
              placeholder="Type your message"
            ></textarea>

            <div className="contact_form_btn_div">
              <a href="." className="contact_form_btn">
                Send Message
              </a>
            </div>
          </div>

          <div
            className="contact_get_in_touch"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            <p className="contact_get_in_touch_text">Get In Touch</p>
            <div className="contact_phone_div">
              <span className="contact_phone_icon_span">
                <FontAwesomeIcon
                  className="contact_phone_icon"
                  icon={faPhone}
                />
              </span>
              <span className="contact_phone">01841-993788</span>
            </div>

            <div className="contact_email_div">
              <span className="contact_email_icon_span">
                <FontAwesomeIcon
                  className="contact_email_icon"
                  icon={faEnvelope}
                />
              </span>
              <span className="contact_email_text">
                bosphoruscafebd@gmail.com
              </span>
            </div>

            <div className="contact_location_div">
              <span className="contact_location_icon_span">
                <FontAwesomeIcon
                  className="contact_location_icon"
                  icon={faLocationArrow}
                />
              </span>
              <span className="contact_location_text">
                BTI Landmark, 16 Gulshan Avenue
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
