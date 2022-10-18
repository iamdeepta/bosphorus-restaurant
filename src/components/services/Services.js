import React, { useState, useEffect } from "react";
import "./css/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBirthdayCake,
  faUserFriends,
  faCloudMeatball,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import AppUrl from "../../classes/AppUrl";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "serviceGet")
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
          {data.map((item) => {
            return (
              <a
                href="."
                className="services_contents_links"
                data-aos="zoom-in"
                data-aos-delay="20"
                key={item.service_id}
              >
                {/* <FontAwesomeIcon
                  className="services_contents_icon"
                  icon={faBirthdayCake}
                /> */}
                <img
                  className="services_contents_icon"
                  src={AppUrl.image_url_backend + item.service_image}
                  alt={item.service_title}
                />
                <p className="services_contents_title">{item.service_title}</p>
                <p className="services_contents_description">
                  {item.service_description}
                </p>
              </a>
            );
          })}

          {/* <a
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
          </a> */}
        </div>
      </section>
    </>
  );
};

export default Services;
