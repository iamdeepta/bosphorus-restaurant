import React from "react";
import "./css/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faUserFriends,
  faCloudMeatball,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <section className="services_section container">
        <p className="services_text">SERVICES</p>
        <h2 className="services_catering_services_text">Catering Services</h2>

        <div className="services_contents">
          <a href="." className="services_contents_links">
            <FontAwesomeIcon
              className="services_contents_icon"
              icon={faBirthdayCake}
            />
            <p className="services_contents_title">Birthday Party</p>
            <p className="services_contents_description">
              Even the all powerful pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </a>

          <a href="." className="services_contents_links">
            <FontAwesomeIcon
              className="services_contents_icon"
              icon={faUserFriends}
            />
            <p className="services_contents_title">Business Meetings</p>
            <p className="services_contents_description">
              Even the all powerful pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </a>

          <a href="." className="services_contents_links">
            <FontAwesomeIcon
              className="services_contents_icon"
              icon={faCloudMeatball}
            />
            <p className="services_contents_title">Wedding Party</p>
            <p className="services_contents_description">
              Even the all powerful pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
