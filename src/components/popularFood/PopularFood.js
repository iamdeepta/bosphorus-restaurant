import React from "react";
import "./css/popular-food.css";
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

const PopularFood = () => {
  let settings1;
  if (window.innerWidth <= 460) {
    settings1 = {
      // dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
    };
  } else {
    settings1 = {
      // dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: "0px",
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
    };
  }

  return (
    <>
      <section className="popular_food_section">
        <div className="popular_food_inside container">
          <div className="popular_food_header">
            <p className="popular_food_text" data-aos="fade-right">
              Popular Food
            </p>
            <a href="." className="popular_food_see_all" data-aos="fade-left">
              See all
            </a>
          </div>

          <div className="popular_food_slider_div">
            <Slider {...settings1}>
              <div
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food7.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food8.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food9.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food10.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food11.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food12.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food13.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food14.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food15.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
                className="popular_food_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
              >
                <img
                  src={AppUrl.image_url + "assets/images/food16.jpg"}
                  alt="baklava"
                />
                <div className="popular_food_slider_title_section">
                  <p className="popular_food_slider_title">Ozel Baklava</p>
                  <a href=".">
                    <FontAwesomeIcon
                      className="popular_food_slider_heart_icon"
                      icon={faHeart}
                    />
                  </a>
                </div>
                <div className="popular_food_slider_description_section">
                  <p className="popular_food_slider_description">
                    Species of baklava
                  </p>
                </div>
                <div className="popular_food_slider_price_section">
                  <p className="popular_food_slider_price">TK. 390</p>
                  <div className="popular_food_slider_rating_section">
                    <p className="popular_food_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_slider_rating_star"
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
        </div>
      </section>
    </>
  );
};

export default PopularFood;
