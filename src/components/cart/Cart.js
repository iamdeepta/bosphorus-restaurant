import React from "react";
import "./css/cart.css";
import AppUrl from "../../classes/AppUrl";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Cart = () => {
  const options = {
    settings: {
      autoplaySpeed: 3000,
      boxShadow: "none",
      disableKeyboardControls: false,
      disablePanzoom: false,
      disableWheelControls: true,
      hideControlsAfter: false,
      lightboxTransitionSpeed: 0.3,
      lightboxTransitionTimingFunction: "linear",
      overlayColor: "rgba(30, 30, 30, 0.9)",
      slideAnimationType: "slide",
      slideSpringValues: [300, 50],
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: "linear",
      usingPreact: false,
    },
    caption: {},
    buttons: {},
    thumbnails: { showThumbnails: false },
    progressBar: {},
    translations: {}, // PRO ONLY
    icons: {}, // PRO ONLY
  };

  function closeCart() {
    var bg = document.querySelector(".blur_bg_main");
    bg.classList.remove("blur_bg_main_active");

    var cart = document.querySelector(".cart_sidebar_div");
    cart.classList.remove("cart_sidebar_div_active");
  }
  return (
    <>
      <SimpleReactLightbox>
        <div className="cart_sidebar_div">
          <div className="cart_header_div">
            <p className="cart_header_text">Your Order</p>
            <GiCrossedBones
              className="cart_header_cross"
              onClick={() => closeCart()}
            />
          </div>
          <div className="cart_content_middle_div">
            <div className="cart_content_row">
              <div className="cart_inc_dec">
                <MdArrowDropUp className="cart_arrow_up" />
                <p className="cart_number">4</p>
                <MdArrowDropDown className="cart_arrow_down" />
              </div>
              <div className="cart_pic_div">
                <SRLWrapper options={options}>
                  <img
                    className="cart_pic"
                    src={AppUrl.image_url + "assets/images/food1.jpg"}
                    alt="food"
                  />
                </SRLWrapper>
              </div>
              <div className="cart_food_name_div">
                <p className="cart_food_name">Ozel Baklava</p>
                <p className="cart_food_price">TK 395</p>
              </div>
              <GiCrossedBones className="cart_cross"></GiCrossedBones>
            </div>

            <div className="cart_horizontal_divider"></div>

            <div className="cart_content_row">
              <div className="cart_inc_dec">
                <MdArrowDropUp className="cart_arrow_up" />
                <p className="cart_number">4</p>
                <MdArrowDropDown className="cart_arrow_down" />
              </div>
              <div className="cart_pic_div">
                <SRLWrapper options={options}>
                  <img
                    className="cart_pic"
                    src={AppUrl.image_url + "assets/images/food2.jpg"}
                    alt="food"
                  />
                </SRLWrapper>
              </div>
              <div className="cart_food_name_div">
                <p className="cart_food_name">Spaghetti Bolognese</p>
                <p className="cart_food_price">TK 395</p>
              </div>
              <GiCrossedBones className="cart_cross"></GiCrossedBones>
            </div>

            <div className="cart_horizontal_divider"></div>

            <div className="cart_content_row">
              <div className="cart_inc_dec">
                <MdArrowDropUp className="cart_arrow_up" />
                <p className="cart_number">4</p>
                <MdArrowDropDown className="cart_arrow_down" />
              </div>
              <div className="cart_pic_div">
                <SRLWrapper options={options}>
                  <img
                    className="cart_pic"
                    src={AppUrl.image_url + "assets/images/food3.jpg"}
                    alt="food"
                  />
                </SRLWrapper>
              </div>
              <div className="cart_food_name_div">
                <p className="cart_food_name">Ozel Baklava</p>
                <p className="cart_food_price">TK 395</p>
              </div>
              <GiCrossedBones className="cart_cross"></GiCrossedBones>
            </div>

            <div className="cart_horizontal_divider"></div>

            <div className="cart_content_row">
              <div className="cart_inc_dec">
                <MdArrowDropUp className="cart_arrow_up" />
                <p className="cart_number">4</p>
                <MdArrowDropDown className="cart_arrow_down" />
              </div>
              <div className="cart_pic_div">
                <SRLWrapper options={options}>
                  <img
                    className="cart_pic"
                    src={AppUrl.image_url + "assets/images/food4.jpg"}
                    alt="food"
                  />
                </SRLWrapper>
              </div>
              <div className="cart_food_name_div">
                <p className="cart_food_name">Ozel Baklava</p>
                <p className="cart_food_price">TK 395</p>
              </div>
              <GiCrossedBones className="cart_cross"></GiCrossedBones>
            </div>
          </div>

          <div className="cart_total_div">
            <p className="cart_total_price_text">Total Price:</p>
            <p className="cart_total_price">TK 2800</p>
          </div>

          <Link
            to="/checkout"
            className="cart_checkout_btn"
            onClick={() => closeCart()}
          >
            Checkout
          </Link>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Cart;
