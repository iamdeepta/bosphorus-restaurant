import React from "react";
import "./css/our-menu.css";
import AppUrl from "../../classes/AppUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
//import { BsHeart } from "react-icons/bs";

const OurMenu = () => {
  let settings1;
  let settings2;
  if (window.innerWidth <= 460) {
    settings1 = {
      // dots: true,
      infinite: true,
      rows: 2,
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
      rows: 2,
      centerMode: true,
      centerPadding: "0px",
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
    };
  }

  if (window.innerWidth <= 460) {
    settings2 = {
      // dots: true,
      infinite: false,
      rows: 1,
      centerMode: true,
      centerPadding: "0px",
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
    };
  } else {
    settings2 = {
      // dots: true,
      infinite: false,
      rows: 1,
      centerMode: true,
      centerPadding: "0px",
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
    };
  }

  function selectCat(id) {
    let category = [...document.querySelectorAll(".our_menu_category")];

    //category.map((i, j) => i.classList.add("our_menu_category_active"));
    category[id].classList.add("our_menu_category_active");
    //category[!id].classList.remove("our_menu_category_active");
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

        <div
          className="our_menu_category_div"
          data-aos="fade-up"
          data-aos-delay="20"
        >
          <Slider {...settings2} className="our_menu_category_slider">
            <div className="our_menu_category" onClick={() => selectCat(0)}>
              Breakfast
            </div>
            <div className="our_menu_category" onClick={() => selectCat(1)}>
              Lunch
            </div>
            <div className="our_menu_category" onClick={() => selectCat(2)}>
              Dinner
            </div>
            <div className="our_menu_category" onClick={() => selectCat(3)}>
              Baklava
            </div>
            <div className="our_menu_category" onClick={() => selectCat(4)}>
              Icecream
            </div>
            <div className="our_menu_category" onClick={() => selectCat(5)}>
              Sandwich
            </div>
          </Slider>
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
                  {/* <BsHeart className="our_menu_slider_heart_icon" /> */}
                  {/* <FontAwesomeIcon
                    className="our_menu_slider_heart_icon"
                    icon={faHeart}
                  /> */}
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
                    <FontAwesomeIcon icon={faShoppingBasket} />
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
