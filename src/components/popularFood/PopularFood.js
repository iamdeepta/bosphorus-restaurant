import React, { useState, useEffect, useContext } from "react";
import "./css/popular-food.css";
import AppUrl from "../../classes/AppUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingBasket,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
//import Preloader from "../preloader/Preloader";
//import { BsHeart } from "react-icons/bs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";
import CartContext from "../../context/cart/CartContext";

const PopularFood = () => {
  const { addToCart, cartItems, removeItem } = useContext(CartContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "popularProductGetTen")
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

  let settings1;
  if (window.innerWidth <= 460) {
    settings1 = {
      // dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  } else {
    settings1 = {
      // dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
    };
  }

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

  return (
    <>
      <SimpleReactLightbox>
        <section className="popular_food_section">
          <div className="popular_food_inside container">
            <div className="popular_food_header">
              <p className="popular_food_text" data-aos="fade-right">
                Popular Food
              </p>
              <Link
                to="/popular-food"
                className="popular_food_see_all"
                data-aos="fade-left"
              >
                See all
              </Link>
            </div>

            <div className="popular_food_slider_div">
              <Slider {...settings1}>
                {data.map((item) => (
                  <div
                    className="popular_food_slider_inside_div"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    key={item.product_id}
                  >
                    <LazyLoad height={200}>
                      <SRLWrapper options={options}>
                        <img
                          className="popular_food_slider_img_skeleton"
                          src={AppUrl.image_url_backend + item.product_image}
                          alt={item.product_name}
                        />
                      </SRLWrapper>
                    </LazyLoad>
                    <div className="popular_food_slider_title_section">
                      <p className="popular_food_slider_title">
                        {item.product_name}
                      </p>
                      <a href=".">
                        {/* <BsHeart className="popular_food_slider_heart_icon" /> */}
                        {/* <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    /> */}
                      </a>
                    </div>
                    <div className="popular_food_slider_description_section">
                      <p className="popular_food_slider_description">
                        {item.product_detail}
                      </p>
                    </div>
                    <div className="popular_food_slider_price_section">
                      <p className="popular_food_slider_price">
                        TK. {item.product_price}
                      </p>
                      <div className="popular_food_slider_rating_section">
                        <p className="popular_food_slider_rating">
                          4.9{" "}
                          <FontAwesomeIcon
                            className="popular_food_slider_rating_star"
                            icon={faStar}
                          />
                        </p>
                        {cartItems.some(
                          (p) => p.product_id === item.product_id
                        ) ? (
                          <>
                            <span onClick={() => removeItem(item.product_id)}>
                              <FontAwesomeIcon
                                icon={faMinusCircle}
                                className="remove_from_cart_icon"
                              />
                            </span>
                          </>
                        ) : (
                          <>
                            <span onClick={() => addToCart(item)}>
                              <FontAwesomeIcon
                                icon={faShoppingBasket}
                                className="add_to_cart_icon"
                              />
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <LazyLoad height={200} placeholder={<Preloader />}>
                  <img
                    src={AppUrl.image_url + "assets/images/food13.jpg"}
                    alt="baklava"
                  />
                </LazyLoad>
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Caesar Salad</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of salad
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 495</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
                        icon={faStar}
                      />
                    </p>
                    <a href=".">
                      <FontAwesomeIcon icon={faShoppingBasket} />
                    </a>
                  </div>
                </div>
              </div> */}

                {/* <div
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <LazyLoad height={200} placeholder={<Preloader />}>
                  <img
                    src={AppUrl.image_url + "assets/images/food14.jpg"}
                    alt="baklava"
                  />
                </LazyLoad>
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Greek Salad</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of salad
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 525</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
                        icon={faStar}
                      />
                    </p>
                    <a href=".">
                      <FontAwesomeIcon icon={faShoppingBasket} />
                    </a>
                  </div>
                </div>
              </div> */}

                {/* <div
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <LazyLoad height={200} placeholder={<Preloader />}>
                  <img
                    src={AppUrl.image_url + "assets/images/food15.jpg"}
                    alt="baklava"
                  />
                </LazyLoad>
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Chicken Sandwich</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of sandwich
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 465</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
                        icon={faStar}
                      />
                    </p>
                    <a href=".">
                      <FontAwesomeIcon icon={faShoppingBasket} />
                    </a>
                  </div>
                </div>
              </div> */}

                {/* <div
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <LazyLoad height={200} placeholder={<Preloader />}>
                  <img
                    src={AppUrl.image_url + "assets/images/food16.jpg"}
                    alt="baklava"
                  />
                </LazyLoad>
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Chicken Burger</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of burger
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 595</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
                        icon={faStar}
                      />
                    </p>
                    <a href=".">
                      <FontAwesomeIcon icon={faShoppingBasket} />
                    </a>
                  </div>
                </div>
              </div> */}
              </Slider>
            </div>
          </div>
        </section>
      </SimpleReactLightbox>
    </>
  );
};

export default PopularFood;
