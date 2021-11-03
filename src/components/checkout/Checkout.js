import React from "react";
import "./css/checkout.css";
import AppUrl from "../../classes/AppUrl";
//import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <section className="checkout_section container">
        <div className="checkout_header_div">
          <p className="checkout_header_text">Checkout</p>
        </div>
        <div className="checkout_content">
          <div className="checkout_left_content">
            <div className="checkout_left_content_card">
              <span className="checkout_left_content_login_a">a</span>
              <div className="checkout_left_content_login_div">
                <p className="checkout_left_content_login_guest_text">Guest</p>
                <p className="checkout_left_content_login_user_text">Login</p>
              </div>
            </div>

            <div className="checkout_left_content_login_body">
              <p className="checkout_left_content_login_body_text">
                Confirm your order as a Guest or Login to your account.
              </p>
            </div>
          </div>
          <div className="checkout_right_content">
            <div className="checkout_cart_header_div">
              <p className="checkout_cart_header_text">Order Summary</p>
            </div>
            <div className="checkout_cart_content_middle_div">
              <div className="checkout_cart_content_row">
                <div className="checkout_cart_inc_dec"></div>
                <div className="checkout_cart_pic_div">
                  <img
                    className="checkout_cart_pic"
                    src={AppUrl.image_url + "assets/images/food1.jpg"}
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

              <div className="checkout_cart_horizontal_divider"></div>

              <div className="checkout_cart_content_row">
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

              <div className="checkout_cart_horizontal_divider"></div>

              <div className="checkout_cart_content_row">
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

              <div className="checkout_cart_horizontal_divider"></div>
            </div>

            <div className="checkout_cart_price_all_div">
              <div className="checkout_cart_total_price_div">
                <p className="checkout_cart_total_text">Total</p>
                <p className="checkout_cart_total">TK 2700</p>
              </div>
              <div className="checkout_cart_delivery_price_div">
                <p className="checkout_cart_delivery_price_text">Delivery</p>
                <p className="checkout_cart_delivery_price">TK 100</p>
              </div>
            </div>

            <div className="checkout_cart_total_div">
              <p className="checkout_cart_total_price_text">Subtotal Price:</p>
              <p className="checkout_cart_total_price">TK 2800</p>
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
