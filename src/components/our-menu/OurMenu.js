import React from "react";
import "./css/our-menu.css";
import AppUrl from "../../classes/AppUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const OurMenu = () => {
  let settings1;
  if (window.innerWidth <= 460) {
    settings1 = {
      // dots: true,
      infinite: true,
      rows: 2,
      centerMode: true,
      centerPadding: "0px",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  } else {
    settings1 = {
      // dots: true,
      infinite: true,
      rows: 2,
      centerMode: true,
      centerPadding: "0px",
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
    };
  }

  return (
    <>
      <section className="our_menu_section container">
        <div className="our_menu_header">
          <p
            className="our_menu_specialities_text"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            SPECIALITIES
          </p>
          <h2 className="our_menu_text" data-aos="fade-up" data-aos-delay="10">
            Our Menu
          </h2>
        </div>

        <div className="our_menu_slider_div">
          <Slider {...settings1}>
            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food17.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Veg Sandwich</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">
                  Species of sandwich
                </p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 340</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food18.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Tandoori Wrap</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Species of wrap</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 455</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food19.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Spaghetti Bolognese</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Species of pasta</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 590</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food20.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">T-Bone Steak</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Species of steak</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 1490</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food21.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Salmon Steak</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Species of steak</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 1650</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food22.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Rib-Eye Steak</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Species of steak</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 1550</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food23.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Buffalo Wings</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Starter</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 475</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food24.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">French Fries</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Starter</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 220</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food25.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Prawn Tempura</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Starter</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 625</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="our_menu_slider_inside_div"
              data-aos="zoom-in"
              data-aos-delay="20"
            >
              <img
                src={AppUrl.image_url + "assets/images/food6.jpg"}
                alt="baklava"
              />
              <div className="our_menu_slider_title_section">
                <p className="our_menu_slider_title">Quesadilla</p>
                <a href=".">
                  <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  />
                </a>
              </div>
              <div className="our_menu_slider_description_section">
                <p className="our_menu_slider_description">Species of burger</p>
              </div>
              <div className="our_menu_slider_price_section">
                <p className="our_menu_slider_price">TK. 490</p>
                <div className="our_menu_slider_rating_section">
                  <p className="our_menu_slider_rating">
                    4.9{" "}
                    <FontAwesomeIcon
                      className="our_menu_slider_rating_star"
                      icon={faStar}
                    />
                  </p>
                  <a href=".">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurMenu;
