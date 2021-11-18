import React, { useContext, useState } from "react";
import "./css/checkout.css";
import AppUrl from "../../classes/AppUrl";
//import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsPatchCheckFill } from "react-icons/bs";
import swal from "sweetalert";
import CartContext from "../../context/cart/CartContext";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import axios from "axios";

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal_code, setPostalCode] = useState("");

  const [otp, setOtp] = useState("");
  const [otp_no, setOtpNo] = useState("");
  const [invoice_no, setInvoiceNo] = useState("");

  const [payment_method, setPaymentMethod] = useState("");

  let item_count = cartItems.length;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //let invoice_no = getRandomInt(11111, 99999);

  //localStorage.setItem("invoice_no", invoice_no);

  if (cartItems.length <= 0) {
    history.push("/");
    // localStorage.removeItem("invoice_no");
    // localStorage.removeItem("customer_name");
    // localStorage.removeItem("customer_phone");
    // localStorage.removeItem("customer_email");
    // localStorage.removeItem("customer_address");
    // localStorage.removeItem("customer_city");
    // localStorage.removeItem("customer_postal_code");
    // localStorage.removeItem("customer_otp");
  }

  function activeGuest() {
    let guest_btn = document.querySelector(
      ".checkout_left_content_login_guest_text"
    );
    let user_btn = document.querySelector(
      ".checkout_left_content_login_user_text"
    );
    let welcome_msg = document.querySelector(
      ".checkout_left_content_login_body"
    );
    let login_ui = document.querySelector(
      ".checkout_left_content_login_form_div"
    );
    let shipping_ui = document.querySelector(
      ".checkout_left_content_shipping_div"
    );
    let login_header = document.querySelector(
      ".checkout_left_content_login_div"
    );
    let shipping_header = document.querySelector(
      ".checkout_left_content_card_shipping"
    );
    let bullet = [
      ...document.querySelectorAll(".checkout_left_content_login_a"),
    ];
    guest_btn.classList.add("checkout_left_content_login_guest_text_active");
    user_btn.classList.remove("checkout_left_content_login_user_text_active");
    welcome_msg.classList.add("checkout_left_content_login_body_inactive");
    login_ui.classList.remove("checkout_left_content_login_form_div_active");
    shipping_ui.classList.add("checkout_left_content_shipping_div_active");

    login_header.style.display = "none";
    shipping_header.style.display = "block";
    bullet[0].classList.add("checkout_left_content_login_a_active");

    setOtpNo(getRandomInt(111111, 999999).toString());
    setInvoiceNo(getRandomInt(11111, 99999).toString());
    //localStorage.setItem("customer_otp", otp_no);
    //console.log(cartItems);
  }

  function activeUser() {
    let user_btn = document.querySelector(
      ".checkout_left_content_login_user_text"
    );
    let guest_btn = document.querySelector(
      ".checkout_left_content_login_guest_text"
    );
    let welcome_msg = document.querySelector(
      ".checkout_left_content_login_body"
    );
    let login_ui = document.querySelector(
      ".checkout_left_content_login_form_div"
    );
    let shipping_ui = document.querySelector(
      ".checkout_left_content_shipping_div"
    );
    let bullet = [
      ...document.querySelectorAll(".checkout_left_content_login_a"),
    ];
    user_btn.classList.add("checkout_left_content_login_user_text_active");
    guest_btn.classList.remove("checkout_left_content_login_guest_text_active");
    welcome_msg.classList.add("checkout_left_content_login_body_inactive");
    login_ui.classList.add("checkout_left_content_login_form_div_active");
    shipping_ui.classList.remove("checkout_left_content_shipping_div_active");
    bullet[0].classList.remove("checkout_left_content_login_a_active");
  }

  function backToWelcomeMsg() {
    let shipping_ui = document.querySelector(
      ".checkout_left_content_shipping_div"
    );
    let welcome_msg = document.querySelector(
      ".checkout_left_content_login_body"
    );
    let login_header = document.querySelector(
      ".checkout_left_content_login_div"
    );
    let shipping_header = document.querySelector(
      ".checkout_left_content_card_shipping"
    );
    let guest_btn = document.querySelector(
      ".checkout_left_content_login_guest_text"
    );
    let bullet = [
      ...document.querySelectorAll(".checkout_left_content_login_a"),
    ];

    shipping_ui.classList.remove("checkout_left_content_shipping_div_active");
    welcome_msg.classList.remove("checkout_left_content_login_body_inactive");
    guest_btn.classList.remove("checkout_left_content_login_guest_text_active");
    login_header.style.display = "flex";
    shipping_header.style.display = "none";
    bullet[0].classList.remove("checkout_left_content_login_a_active");
  }

  async function nextToOtp() {
    if (
      name !== "" &&
      phone !== "" &&
      email !== "" &&
      address !== "" &&
      city !== "" &&
      postal_code !== ""
    ) {
      let shipping_ui = document.querySelector(
        ".checkout_left_content_shipping_div"
      );
      let otp_ui = document.querySelector(
        ".checkout_left_content_otp_form_div"
      );
      // let otp_header_letter = document.querySelector(
      //   ".checkout_left_content_login_a_shipping"
      // );
      let otp_header = document.querySelector(
        ".checkout_left_content_login_div_shipping p"
      );
      let bullet = [
        ...document.querySelectorAll(".checkout_left_content_login_a"),
      ];

      shipping_ui.classList.remove("checkout_left_content_shipping_div_active");
      otp_ui.classList.add("checkout_left_content_otp_form_div_active");
      //otp_header_letter.innerHTML = "c";
      otp_header.innerHTML = "OTP CONFIRMATION";
      bullet[1].classList.add("checkout_left_content_login_a_active");

      // localStorage.setItem("customer_name", name);
      // localStorage.setItem("customer_phone", phone);
      // localStorage.setItem("customer_email", email);
      // localStorage.setItem("customer_address", address);
      // localStorage.setItem("customer_city", city);
      // localStorage.setItem("customer_postal_code", postal_code);

      toast.success("OTP has been sent to your email");

      let items = { email, otp_no };

      //let result =
      await fetch(AppUrl.base_url + "otp_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      });

      //otp request
      // const options = {
      //   method: "POST",
      //   url: "https://d7sms.p.rapidapi.com/secure/send",
      //   headers: {
      //     "content-type": "application/json",
      //     authorization: "Basic Z3FkdjI4MTg6VEZ5YlFDT1c=",
      //     "x-rapidapi-host": "d7sms.p.rapidapi.com",
      //     "x-rapidapi-key":
      //       "f810671fb5msh3c219e1dc3a3725p1965c7jsn84d272eb4e57",
      //   },
      //   data: {
      //     content: "Your OTP is" + otp_no,
      //     from: "Bosphorus",
      //     to: 8801773182803,
      //   },
      // };

      // axios
      //   .request(options)
      //   .then(function (response) {
      //     console.log(response.data);
      //   })
      //   .catch(function (error) {
      //     console.error(error);
      //   });
    } else {
      toast.error("Please fill up all the required fields");
    }
  }

  function backToShipping() {
    let shipping_ui = document.querySelector(
      ".checkout_left_content_shipping_div"
    );
    let otp_ui = document.querySelector(".checkout_left_content_otp_form_div");
    // let otp_header_letter = document.querySelector(
    //   ".checkout_left_content_login_a_shipping"
    // );
    let otp_header = document.querySelector(
      ".checkout_left_content_login_div_shipping p"
    );
    let bullet = [
      ...document.querySelectorAll(".checkout_left_content_login_a"),
    ];

    shipping_ui.classList.add("checkout_left_content_shipping_div_active");
    otp_ui.classList.remove("checkout_left_content_otp_form_div_active");
    //otp_header_letter.innerHTML = "b";
    otp_header.innerHTML = "SHIPPING ADDRESS";
    bullet[1].classList.remove("checkout_left_content_login_a_active");
  }

  function nextToPaymentMethod() {
    if (otp !== "") {
      if (otp === otp_no) {
        let pm_ui = document.querySelector(
          ".checkout_left_content_payment_method"
        );
        let otp_ui = document.querySelector(
          ".checkout_left_content_otp_form_div"
        );
        // let pm_header_letter = document.querySelector(
        //   ".checkout_left_content_login_a_shipping"
        // );
        let pm_header = document.querySelector(
          ".checkout_left_content_login_div_shipping p"
        );
        let bullet = [
          ...document.querySelectorAll(".checkout_left_content_login_a"),
        ];

        pm_ui.classList.add("checkout_left_content_payment_method_active");
        otp_ui.classList.remove("checkout_left_content_otp_form_div_active");
        //pm_header_letter.innerHTML = "d";
        pm_header.innerHTML = "PAYMENT METHOD";
        bullet[2].classList.add("checkout_left_content_login_a_active");

        setOtp("");
      } else {
        toast.error("You entered wrong OTP");
      }
    } else {
      toast.error("Please enter your OTP");
    }
    //console.log(otp_no);
    //console.log(otp);
  }

  function backToOtp() {
    let payment_ui = document.querySelector(
      ".checkout_left_content_payment_method"
    );
    let otp_ui = document.querySelector(".checkout_left_content_otp_form_div");
    // let otp_header_letter = document.querySelector(
    //   ".checkout_left_content_login_a_shipping"
    // );
    let otp_header = document.querySelector(
      ".checkout_left_content_login_div_shipping p"
    );
    let bullet = [
      ...document.querySelectorAll(".checkout_left_content_login_a"),
    ];

    payment_ui.classList.remove("checkout_left_content_payment_method_active");
    otp_ui.classList.add("checkout_left_content_otp_form_div_active");
    //otp_header_letter.innerHTML = "c";
    otp_header.innerHTML = "OTP CONFIRMATION";
    bullet[2].classList.remove("checkout_left_content_login_a_active");
  }

  function bkashMethod() {
    let bkash_btn = document.querySelector(
      ".checkout_left_content_payment_method_bkash_check_icon"
    );
    let user_bcod_btn = document.querySelector(
      ".checkout_left_content_payment_method_cod_check_icon"
    );

    bkash_btn.classList.add(
      "checkout_left_content_payment_method_bkash_active"
    );
    user_bcod_btn.classList.remove(
      "checkout_left_content_payment_method_cod_active"
    );

    setPaymentMethod("Bkash");
  }

  function codMethod() {
    let bkash_btn = document.querySelector(
      ".checkout_left_content_payment_method_bkash_check_icon"
    );
    let user_bcod_btn = document.querySelector(
      ".checkout_left_content_payment_method_cod_check_icon"
    );

    bkash_btn.classList.remove(
      "checkout_left_content_payment_method_bkash_active"
    );
    user_bcod_btn.classList.add(
      "checkout_left_content_payment_method_cod_active"
    );

    setPaymentMethod("Cash On Delivery");
  }

  async function paymentConfirm() {
    if (payment_method !== "") {
      let bullet = [
        ...document.querySelectorAll(".checkout_left_content_login_a"),
      ];
      bullet[3].classList.add("checkout_left_content_login_a_active");
      swal({
        title: "Order has been placed successfully",
        text: "Thank you for purchasing from us.",
        icon: "success",
      });

      let items = {
        name,
        phone,
        email,
        address,
        city,
        postal_code,
        totalAmount,
        item_count,
        payment_method,
      };

      //let result =
      await fetch(AppUrl.base_url + "order_mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(items),
      });

      setTimeout(function () {
        window.location.reload();
      }, 2000);
    } else {
      toast.error("Please select a payment method");
    }
  }

  return (
    <>
      <ToastContainer />
      <section className="checkout_section container">
        <div className="checkout_header_div">
          <p className="checkout_header_text">Checkout</p>
        </div>
        <div className="checkout_content">
          <div className="checkout_left_content">
            <div className="checkout_left_content_card">
              <div className="checkout_left_content_bullets_div">
                <div className="checkout_left_content_login_a">a</div>
                <div className="checkout_left_content_login_a">b</div>
                <div className="checkout_left_content_login_a">c</div>
                <div className="checkout_left_content_login_a">d</div>
              </div>
              <div className="checkout_left_content_login_div">
                <p
                  className="checkout_left_content_login_guest_text"
                  onClick={() => activeGuest()}
                >
                  Guest
                </p>
                <p
                  className="checkout_left_content_login_user_text"
                  onClick={() => activeUser()}
                >
                  Login
                </p>
              </div>
              <div className="checkout_left_content_card_shipping">
                <div className="checkout_left_content_login_div_shipping">
                  <p>SHIPPING ADDRESS</p>
                </div>
              </div>
            </div>

            <div className="checkout_left_content_user_body_div">
              <div className="checkout_left_content_login_body">
                <p className="checkout_left_content_login_body_text">
                  Confirm your order as a Guest.
                </p>
              </div>

              <div className="checkout_left_content_login_form_div">
                <div className="checkout_left_content_login_form_content">
                  <div className="checkout_left_content_login_form_left_content">
                    <p className="checkout_left_content_login_form_left_content_name_text">
                      Email*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_login_form_email"
                    />
                  </div>

                  <div className="checkout_left_content_login_form_right_content">
                    <p className="checkout_left_content_login_form_right_content_name_text">
                      Password*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_login_form_password"
                    />
                  </div>
                </div>
                <div className="checkout_left_content_login_btn">Login</div>
              </div>

              <div className="checkout_left_content_shipping_div">
                <div className="checkout_left_content_shipping_form_content">
                  <div className="checkout_left_content_shipping_form_left_content">
                    <p className="checkout_left_content_shipping_form_left_content_name_text">
                      Name*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_shipping_form_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <p className="checkout_left_content_shipping_form_left_content_email_text">
                      Email*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_shipping_form_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <p className="checkout_left_content_shipping_form_left_content_city_text">
                      City*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_shipping_form_city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>

                  <div className="checkout_left_content_shipping_form_right_content">
                    <p className="checkout_left_content_shipping_form_right_content_phone_text">
                      Phone*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_shipping_form_phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />

                    <p className="checkout_left_content_shipping_form_right_content_address_text">
                      Address*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_shipping_form_address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />

                    <p className="checkout_left_content_shipping_form_right_content_postal_text">
                      Postal Code*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_shipping_form_postal"
                      value={postal_code}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkout_left_content_shipping_btn_div">
                  <div
                    className="checkout_left_content_shipping_btn_prev"
                    onClick={() => backToWelcomeMsg()}
                  >
                    Previous
                  </div>
                  <div
                    className="checkout_left_content_shipping_btn_next"
                    onClick={() => nextToOtp()}
                  >
                    Next
                  </div>
                </div>
              </div>

              <div className="checkout_left_content_otp_form_div">
                <div className="checkout_left_content_otp_form_content">
                  <div className="checkout_left_content_otp_form_left_content">
                    <p className="checkout_left_content_otp_form_left_content_otp_text">
                      OTP*
                    </p>
                    <input
                      type="text"
                      className="checkout_left_content_otp_form_otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="checkout_left_content_otp_btn_div">
                  <div
                    className="checkout_left_content_otp_btn_prev"
                    onClick={() => backToShipping()}
                  >
                    Previous
                  </div>
                  <div
                    className="checkout_left_content_otp_btn_next"
                    onClick={() => nextToPaymentMethod()}
                  >
                    Next
                  </div>
                </div>
              </div>

              <div className="checkout_left_content_payment_method">
                <div className="checkout_left_content_payment_method_row">
                  <div
                    className="checkout_left_content_payment_method_cod"
                    onClick={() => codMethod()}
                  >
                    <FcMoneyTransfer className="checkout_left_content_payment_method_cod_icon"></FcMoneyTransfer>
                    Cash On Delivery
                    <BsPatchCheckFill className="checkout_left_content_payment_method_cod_check_icon"></BsPatchCheckFill>
                  </div>
                  <div
                    className="checkout_left_content_payment_method_bkash"
                    onClick={() => bkashMethod()}
                  >
                    <img
                      className="checkout_left_content_payment_method_bkash_pic"
                      src={AppUrl.image_url + "assets/images/bkash.png"}
                      alt="bkash"
                    />
                    Bkash
                    <BsPatchCheckFill className="checkout_left_content_payment_method_bkash_check_icon"></BsPatchCheckFill>
                  </div>
                </div>
                <div className="checkout_left_content_payment_method_btn">
                  <div
                    className="checkout_left_content_payment_method_btn_prev"
                    onClick={() => backToOtp()}
                  >
                    Previous
                  </div>
                  <div
                    className="checkout_left_content_payment_method_btn_next"
                    onClick={() => paymentConfirm()}
                  >
                    Confirm
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="checkout_left_content_btn_div">
              <Link classList="checkout_left_content_login_btn">Login</Link>
            </div> */}
          </div>
          <div className="checkout_right_content">
            <div className="checkout_cart_header_div">
              <p className="checkout_cart_header_text">Order Summary</p>
              <p className="checkout_cart_header_invoice_text">
                Invoice #{invoice_no}
              </p>
            </div>
            <div className="checkout_cart_content_middle_div">
              {cartItems.map((item) => (
                <div>
                  <div className="checkout_cart_content_row">
                    <div className="checkout_cart_inc_dec"></div>
                    <div className="checkout_cart_pic_div">
                      <img
                        className="checkout_cart_pic"
                        src={AppUrl.image_url_backend + item.product_image}
                        alt={item.product_name}
                      />
                    </div>
                    <div className="checkout_cart_food_name_div">
                      <p className="checkout_cart_food_name">
                        {item.product_name}
                      </p>
                      <p className="checkout_cart_food_price">
                        TK {item.product_price} x
                        <span className="checkout_cart_food_quantity">
                          {" "}
                          {item.product_quantity}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="checkout_cart_horizontal_divider"></div>
                </div>
              ))}

              {/* <div className="checkout_cart_content_row">
                <div className="checkout_cart_inc_dec"></div>
                <div className="checkout_cart_pic_div">
                  <img
                    className="checkout_cart_pic"
                    src={AppUrl.image_url + "assets/images/food2.jpg"}
                    alt="food"
                  />
                </div>
                <div className="checkout_cart_food_name_div">
                  <p className="checkout_cart_food_name">Spaghetti Bolognese</p>
                  <p className="checkout_cart_food_price">
                    TK 395 x
                    <span className="checkout_cart_food_quantity"> 3</span>
                  </p>
                </div>
              </div>

              <div className="checkout_cart_horizontal_divider"></div> */}

              {/* <div className="checkout_cart_content_row">
                <div className="checkout_cart_inc_dec"></div>
                <div className="checkout_cart_pic_div">
                  <img
                    className="checkout_cart_pic"
                    src={AppUrl.image_url + "assets/images/food3.jpg"}
                    alt="food"
                  />
                </div>
                <div className="checkout_cart_food_name_div">
                  <p className="checkout_cart_food_name">Ozel Baklava</p>
                  <p className="checkout_cart_food_price">
                    TK 395 x
                    <span className="checkout_cart_food_quantity"> 2</span>
                  </p>
                </div>
              </div>

              <div className="checkout_cart_horizontal_divider"></div> */}
            </div>

            <div className="checkout_cart_price_all_div">
              <div className="checkout_cart_total_price_div">
                <p className="checkout_cart_total_text">Total</p>
                <p className="checkout_cart_total">TK {totalAmount}</p>
              </div>
              <div className="checkout_cart_delivery_price_div">
                <p className="checkout_cart_delivery_price_text">
                  Delivery Charge
                </p>
                <p className="checkout_cart_delivery_price">TK 100</p>
              </div>
              {/* <div className="checkout_cart_delivery_price_div">
                <p className="checkout_cart_delivery_price_text">Vat</p>
                <p className="checkout_cart_delivery_price">10%</p>
              </div> */}
            </div>

            <div className="checkout_cart_total_div">
              <p className="checkout_cart_total_price_text">Subtotal Price:</p>
              <p className="checkout_cart_total_price">
                TK {totalAmount + 100}
              </p>
            </div>

            {/* <Link to="/checkout" className="checkout_cart_checkout_btn">
              Checkout
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
