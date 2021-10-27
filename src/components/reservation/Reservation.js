import React from "react";
import "./css/reservation.css";
import AppUrl from "../../classes/AppUrl";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const Reservation = () => {
  return (
    <>
      <section className="reservation_section container">
        {/* <div className="reservation_header">
          <p className="reservation_booking_text">BOOKING</p>
          <h2 className="reservation_h2">Reserve A Table</h2>
        </div> */}
        <div className="reservation_content">
          <img
            src={AppUrl.image_url + "assets/images/reservation_pic.webp"}
            alt="reservation"
            data-aos="zoom-in"
            data-aos-delay="0"
          />
          <div className="reservation_right_content">
            <p
              className="reservation_booking_text"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              BOOKING
            </p>
            <h2
              className="reservation_h2"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              Reserve A Table
            </h2>

            <div className="reservation_right_contents">
              <div
                className="reservation_right_content1"
                data-aos="fade-up"
                data-aos-delay="40"
              >
                <p className="reservation_date_label">
                  Date
                  {/* <span>
                  <FontAwesomeIcon
                    className="popular_food_slider_heart_icon"
                    icon={faArrowCircleDown}
                  />
                </span> */}
                </p>

                <input
                  type="date"
                  placeholder="Date"
                  className="reservation_date_input"
                />

                <input
                  type="text"
                  placeholder="Email"
                  className="reservation_email_input"
                />
              </div>

              <div
                className="reservation_right_content2"
                data-aos="fade-up"
                data-aos-delay="60"
              >
                <p className="reservation_time_label">Time</p>
                <input
                  type="time"
                  placeholder="Time"
                  className="reservation_time_input"
                />
                <select
                  name="reservation_person"
                  id="reservation_person_input"
                  className="reservation_person_input"
                >
                  <option value="" selected>
                    Person
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>

            <div
              className="reservation_btn_div"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <a href="." className="reservation_btn">
                Confirm Reservation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
