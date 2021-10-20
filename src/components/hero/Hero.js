import React from "react";
import "./css/hero.css";
import AppUrl from "../../classes/AppUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIceCream,
  faHamburger,
  faPizzaSlice,
  faHeart,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  let settings1 = {
    // dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <section className="hero_main">
        <div className="hero_main_div container">
          <div className="hero_left_content">
            <h1 className="hero_title">A Tale Of Turkey Healthy Food</h1>

            <h2 className="hero_description">
              Indulge into the rich variety of mouth watering dishes we have to
              offer
            </h2>
            <a href="." className="hero_view_menu_btn">
              View Menu <i className="fa fa-arrow-right"></i>
            </a>
            <div className="hero_small_slider_div">
              <Slider {...settings}>
                <div className="hero_small_slider_inside_div">
                  <a href=".">
                    <FontAwesomeIcon icon={faIceCream} />
                  </a>
                  <p>Baklava</p>
                </div>
                <div className="hero_small_slider_inside_div">
                  <a href=".">
                    <FontAwesomeIcon icon={faHamburger} />
                  </a>
                  <p>Baklava</p>
                </div>
                <div className="hero_small_slider_inside_div">
                  <a href=".">
                    <FontAwesomeIcon icon={faPizzaSlice} />
                  </a>
                  <p>Baklava</p>
                </div>
                <div className="hero_small_slider_inside_div">
                  <a href=".">
                    <FontAwesomeIcon icon={faIceCream} />
                  </a>
                  <p>Baklava</p>
                </div>
                <div className="hero_small_slider_inside_div">
                  <a href=".">
                    <FontAwesomeIcon icon={faHamburger} />
                  </a>
                  <p>Baklava</p>
                </div>
              </Slider>
            </div>
          </div>
          <div className="hero_right_content">
            <img
              className="hero_main_baklava_img"
              src={AppUrl.image_url + "assets/images/hero_main_baklava.jpg"}
              alt="baklava"
            />

            <div className="hero_large_slider_div">
              <Slider {...settings1}>
                <div className="hero_large_slider_inside_div">
                  <img
                    src={
                      AppUrl.image_url + "assets/images/hero_main_baklava.jpg"
                    }
                    alt="baklava"
                  />
                  <div className="hero_large_slider_title_section">
                    <p className="hero_large_slider_title">Ozel Baklava</p>
                    <a href=".">
                      <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      />
                    </a>
                  </div>
                  <div className="hero_large_slider_description_section">
                    <p className="hero_large_slider_description">
                      Species of baklava
                    </p>
                  </div>
                  <div className="hero_large_slider_price_section">
                    <p className="hero_large_slider_price">TK. 390</p>
                    <div className="hero_large_slider_rating_section">
                      <p className="hero_large_slider_rating">
                        4.9{" "}
                        <FontAwesomeIcon
                          className="hero_large_slider_rating_star"
                          icon={faStar}
                        />
                      </p>
                      <a href=".">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hero_large_slider_inside_div">
                  <img
                    src={
                      AppUrl.image_url + "assets/images/hero_main_baklava.jpg"
                    }
                    alt="baklava"
                  />
                  <div className="hero_large_slider_title_section">
                    <p className="hero_large_slider_title">Ozel Baklava</p>
                    <a href=".">
                      <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      />
                    </a>
                  </div>
                  <div className="hero_large_slider_description_section">
                    <p className="hero_large_slider_description">
                      Species of baklava
                    </p>
                  </div>
                  <div className="hero_large_slider_price_section">
                    <p className="hero_large_slider_price">TK. 390</p>
                    <div className="hero_large_slider_rating_section">
                      <p className="hero_large_slider_rating">
                        4.9{" "}
                        <FontAwesomeIcon
                          className="hero_large_slider_rating_star"
                          icon={faStar}
                        />
                      </p>
                      <a href=".">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hero_large_slider_inside_div">
                  <img
                    src={
                      AppUrl.image_url + "assets/images/hero_main_baklava.jpg"
                    }
                    alt="baklava"
                  />
                  <div className="hero_large_slider_title_section">
                    <p className="hero_large_slider_title">Ozel Baklava</p>
                    <a href=".">
                      <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      />
                    </a>
                  </div>
                  <div className="hero_large_slider_description_section">
                    <p className="hero_large_slider_description">
                      Species of baklava
                    </p>
                  </div>
                  <div className="hero_large_slider_price_section">
                    <p className="hero_large_slider_price">TK. 390</p>
                    <div className="hero_large_slider_rating_section">
                      <p className="hero_large_slider_rating">
                        4.9{" "}
                        <FontAwesomeIcon
                          className="hero_large_slider_rating_star"
                          icon={faStar}
                        />
                      </p>
                      <a href=".">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hero_large_slider_inside_div">
                  <img
                    src={
                      AppUrl.image_url + "assets/images/hero_main_baklava.jpg"
                    }
                    alt="baklava"
                  />
                  <div className="hero_large_slider_title_section">
                    <p className="hero_large_slider_title">Ozel Baklava</p>
                    <a href=".">
                      <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      />
                    </a>
                  </div>
                  <div className="hero_large_slider_description_section">
                    <p className="hero_large_slider_description">
                      Species of baklava
                    </p>
                  </div>
                  <div className="hero_large_slider_price_section">
                    <p className="hero_large_slider_price">TK. 390</p>
                    <div className="hero_large_slider_rating_section">
                      <p className="hero_large_slider_rating">
                        4.9{" "}
                        <FontAwesomeIcon
                          className="hero_large_slider_rating_star"
                          icon={faStar}
                        />
                      </p>
                      <a href=".">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hero_large_slider_inside_div">
                  <img
                    src={
                      AppUrl.image_url + "assets/images/hero_main_baklava.jpg"
                    }
                    alt="baklava"
                  />
                  <div className="hero_large_slider_title_section">
                    <p className="hero_large_slider_title">Ozel Baklava</p>
                    <a href=".">
                      <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      />
                    </a>
                  </div>
                  <div className="hero_large_slider_description_section">
                    <p className="hero_large_slider_description">
                      Species of baklava
                    </p>
                  </div>
                  <div className="hero_large_slider_price_section">
                    <p className="hero_large_slider_price">TK. 390</p>
                    <div className="hero_large_slider_rating_section">
                      <p className="hero_large_slider_rating">
                        4.9{" "}
                        <FontAwesomeIcon
                          className="hero_large_slider_rating_star"
                          icon={faStar}
                        />
                      </p>
                      <a href=".">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="hero_large_slider_inside_div">
                  <img
                    src={
                      AppUrl.image_url + "assets/images/hero_main_baklava.jpg"
                    }
                    alt="baklava"
                  />
                  <div className="hero_large_slider_title_section">
                    <p className="hero_large_slider_title">Ozel Baklava</p>
                    <a href=".">
                      <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      />
                    </a>
                  </div>
                  <div className="hero_large_slider_description_section">
                    <p className="hero_large_slider_description">
                      Species of baklava
                    </p>
                  </div>
                  <div className="hero_large_slider_price_section">
                    <p className="hero_large_slider_price">TK. 390</p>
                    <div className="hero_large_slider_rating_section">
                      <p className="hero_large_slider_rating">
                        4.9{" "}
                        <FontAwesomeIcon
                          className="hero_large_slider_rating_star"
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
        </div>
      </section>
    </>
  );
};

export default Hero;
