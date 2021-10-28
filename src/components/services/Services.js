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
        <p className="services_text" data-aos="fade-up" data-aos-delay="0">
          SERVICES
        </p>
        <h2
          className="services_catering_services_text"
          data-aos="fade-up"
          data-aos-delay="20"
        >
          Catering Services
        </h2>

        <div className="services_contents">
          <a
            href="."
            className="services_contents_links"
            data-aos="zoom-in"
            data-aos-delay="20"
          >
            <FontAwesomeIcon
              className="services_contents_icon"
              icon={faBirthdayCake}
            />
            <p className="services_contents_title">Birthday Party</p>
            <p className="services_contents_description">
              Want to host your own birthday event but not sure which venue to
              book ? Look no further, we will take care of the whole event for
              you.
            </p>
          </a>

          <a
            href="."
            className="services_contents_links"
            data-aos="zoom-in"
            data-aos-delay="20"
          >
            <FontAwesomeIcon
              className="services_contents_icon"
              icon={faUserFriends}
            />
            <p className="services_contents_title">Corporate Events</p>
            <p className="services_contents_description">
              Whether its a long or short event, we got you covered. Our team
              has hosted lots of prominent corporate events in the past and
              gained countless appreciations.
            </p>
          </a>

          <a
            href="."
            className="services_contents_links"
            data-aos="zoom-in"
            data-aos-delay="20"
          >
            <FontAwesomeIcon
              className="services_contents_icon"
              icon={faCloudMeatball}
            />
            <p className="services_contents_title">Social Gatherings</p>
            <p className="services_contents_description">
              Middle of the week or in the weekend, our team are very skilled in
              providing the best possible service. We can assure you that you
              and your peers will have a great time.
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
