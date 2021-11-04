import React, { useRef, useState } from "react";
import "./css/reservation.css";
//import AppUrl from "../../classes/AppUrl";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
//import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
//import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
//import MobileDatePicker from "@mui/lab/MobileDatePicker";
//import InputLabel from "@mui/material/InputLabel";
//import MenuItem from "@mui/material/MenuItem";
//import FormHelperText from "@mui/material/FormHelperText";
//import FormControl from "@mui/material/FormControl";
//import Select from "@mui/material/Select";
import ReservationSvg from "./ReservationSvg";

const Reservation = () => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [time_value, setTimeValue] = useState("");

  const handleTimeChange = (newValue) => {
    setTimeValue(newValue);
  };

  //   const [person, setPerson] = useState("");

  //   const handlePersonChange = (event) => {
  //     setPerson(event.target.value);
  //   };

  const ref_date = useRef();
  const ref_time = useRef();

  function date_onchange(e) {
    console.log(e.target.value);
    var date_text = document.querySelector(".reservation_pick_date_text");

    date_text.style.display = "none";
  }

  function time_onchange(e) {
    console.log(e.target.value);
    var time_text = document.querySelector(".reservation_pick_time_text");

    time_text.style.display = "none";
  }

  //   function date_on_focus() {
  //     ref_date.current.type = "date";

  //     var date_icon = document.querySelector(".reservation_date_input");

  //     date_icon.click();
  //   }

  //   function time_on_focus() {
  //     ref_time.current.type = "time";

  //     var time_icon = document.querySelector(".reservation_time_input");

  //     time_icon.click();
  //   }
  return (
    <>
      <section className="reservation_section container">
        {/* <div className="reservation_header">
          <p className="reservation_booking_text">BOOKING</p>
          <h2 className="reservation_h2">Reserve A Table</h2>
        </div> */}
        <div className="reservation_content">
          {/* <img
            src={AppUrl.image_url + "assets/images/reservation_pic.webp"}
            alt="reservation"
            data-aos="zoom-in"
            data-aos-delay="0"
          /> */}

          <ReservationSvg />

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

                <p className="reservation_pick_date_text">Pick a date</p>
                <input
                  type="date"
                  ref={ref_date}
                  onChange={(e) => date_onchange(e)}
                  //   onFocus={() => date_on_focus()}
                  //   onBlur={() => (ref_date.current.type = "text")}
                  className="reservation_date_input"
                  //   placeholder="Pick a date"
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {/* <Stack spacing={3}> */}
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {/* </Stack> */}
                </LocalizationProvider>

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
                <p className="reservation_pick_time_text">Choose a time</p>
                <p className="reservation_time_label">Time</p>
                <input
                  ref={ref_time}
                  type="time"
                  onChange={(e) => time_onchange(e)}
                  //   onFocus={() => time_on_focus()}
                  //   onBlur={() => (ref_time.current.type = "text")}
                  className="reservation_time_input"
                  //   placeholder="Choose a time"
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    value={time_value}
                    onChange={handleTimeChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <input
                  type="number"
                  placeholder="Person"
                  className="reservation_email_input"
                />

                {/* <select
                  name="reservation_person"
                  id="reservation_person_input"
                  className="reservation_person_input"
                  style={{ color: "gray" }}
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
                </select> */}

                {/* <FormControl
                  sx={{ mt: 5, minWidth: 250 }}
                  className="person_form_control"
                >
                  <Select
                    value={person}
                    onChange={handlePersonChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    className="person_select"
                  >
                    <MenuItem value="">
                      <span className="person_text">Person</span>
                    </MenuItem>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>Five</MenuItem>
                    <MenuItem value={6}>Six</MenuItem>
                    <MenuItem value={7}>Seven</MenuItem>
                    <MenuItem value={8}>Eight</MenuItem>
                    <MenuItem value={9}>Nine</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl> */}
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
