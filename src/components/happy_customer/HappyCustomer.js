import React from "react";
import "./css/happy-customer.css";
import AppUrl from "../../classes/AppUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const HappyCustomer = () => {
  return (
    <>
      <div className="happy_customer_main_div">
        <p className="happy_customer_text">Our Happy Customers</p>

        <div className="happy_customer_image_div">
          <img
            className="happy_customer_image0"
            src={AppUrl.image_url + "assets/images/person-burger.webp"}
            alt="baklava"
          />
          <img
            className="happy_customer_image1"
            src={AppUrl.image_url + "assets/images/man1.webp"}
            alt="baklava"
          />
          <img
            className="happy_customer_image2"
            src={AppUrl.image_url + "assets/images/man2.webp"}
            alt="baklava"
          />
          <span className="happy_customer_image3">
            <span className="happy_customer_image3_text">3k+</span>
          </span>

          <span className="happy_customer_upper_logo">
            <FontAwesomeIcon
              className="happy_customer_upper_icon"
              icon={faUserFriends}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default HappyCustomer;
