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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppUrl from "../../classes/AppUrl";

const Reservation = () => {
  // const [value, setValue] = useState("");

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  // const [time_value, setTimeValue] = useState("");

  // const handleTimeChange = (newValue) => {
  //   setTimeValue(newValue);
  // };

  //   const [person, setPerson] = useState("");

  //   const handlePersonChange = (event) => {
  //     setPerson(event.target.value);
  //   };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [time1, setTime1] = useState("");
  const [email, setEmail] = useState("");
  const [person, setPerson] = useState("");

  const [loader, setLoader] = useState(false);

  const [date_open, setDateOpen] = useState(false);
  const [time_open, setTimeOpen] = useState(false);

  const ref_date = useRef();
  const ref_time = useRef();

  // function openTimePicker() {

  //   let time_icon = document
  //     .querySelector(".MuiSvgIcon-root")
  //     .setAttribute("data-testid", "ClockIcon");
  //   console.log(time_icon);

  //   if (time_icon === "ClockIcon") {
  //     document.querySelector(".MuiSvgIcon-root").click();
  //   }
  // }

  function date_onchange(e) {
    if (window.innerWidth <= 768) {
      console.log(e.target.value);
      setDate(e.target.value);
      var date_text = document.querySelector(".reservation_pick_date_text");

      date_text.style.display = "none";
    } else {
      //console.log(JSON.stringify(e).substr(1, 10));
      setDate(JSON.stringify(e).substr(1, 10));
    }
  }

  function time_onchange(e1) {
    if (window.innerWidth <= 768) {
      console.log(e1.target.value);
      setTime(e1.target.value);
      var time_text = document.querySelector(".reservation_pick_time_text");

      time_text.style.display = "none";
    } else {
      let time_hour = parseInt(JSON.stringify(e1).substr(12, 2));
      let time_minute = JSON.stringify(e1).substr(14, 3);
      if (time_hour === 19) {
        time_hour = -5;
      }
      if (time_hour === 20) {
        time_hour = -4;
      }
      if (time_hour === 21) {
        time_hour = -3;
      }
      if (time_hour === 22) {
        time_hour = -2;
      }
      if (time_hour === 23) {
        time_hour = -1;
      }

      let time_hour1 = time_hour + 6;
      time_hour1 = time_hour1.toString();
      let whole_time = time_hour1 + time_minute;

      //console.log(whole_time);
      setTime(whole_time);
      setTime1(e1);
    }
  }

  async function reservation_system() {
    setLoader(true);
    // if (email === "") {
    //   toast.error("Please enter email");
    // }
    // if (person === "" || person <= 0) {
    //   toast.error("Please enter person number");
    // }
    // if (date === "") {
    //   toast.error("Please select a date");
    // }
    // if (time === "") {
    //   toast.error("Please choose a time");
    // }
    if (
      email !== "" &&
      person !== "" &&
      person > 0 &&
      date !== "" &&
      time !== ""
    ) {
      let items = { email, person, date, time };

      //let result =
      await fetch(AppUrl.base_url + "reservation_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      });

      //result = await result.json();

      // if (result.error) {
      //   toast.error("Incorrect username or password");
      // } else if (result.success_top) {
      // } else {
      // }
      setLoader(false);
      setEmail("");
      setPerson("");
      setDate("");
      setTime("");
      toast.success("Congratulations, your table is reserved");
    } else {
      setLoader(false);
      toast.error("Please fill up all the fields correctly");
    }
    //console.log(email, person, time, date);
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
                    open={date_open}
                    onOpen={() => setDateOpen(true)}
                    onClose={() => setDateOpen(false)}
                    inputFormat="MM/dd/yyyy"
                    value={date}
                    onChange={(e) => date_onchange(e)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onClick={(e) => setDateOpen(true)}
                      />
                    )}
                  />
                  {/* </Stack> */}
                </LocalizationProvider>

                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    open={time_open}
                    onOpen={() => setTimeOpen(true)}
                    onClose={() => setTimeOpen(false)}
                    value={time1}
                    // views={["hours", "minutes"]}
                    // inputFormat="HH:mm"
                    // mask="__:__"
                    onChange={(e1) => time_onchange(e1)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        onClick={(e) => setTimeOpen(true)}
                        //onClick={() => openTimePicker()}
                      />
                    )}
                  />
                </LocalizationProvider>

                <input
                  type="number"
                  placeholder="Person"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                  className="reservation_email_input"
                  min="1"
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
              {loader === true ? (
                <>
                  <div class="spinner-border"></div>
                </>
              ) : (
                <>
                  <span
                    className="reservation_btn"
                    onClick={() => reservation_system()}
                  >
                    Confirm Reservation
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Reservation;
