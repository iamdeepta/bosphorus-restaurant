import React from "react";
import "./css/popular-food-main.css";
// import "../popularFood/css/popular-food.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import AppUrl from "../../classes/AppUrl";
import { BsHeart } from "react-icons/bs";

const PopularFoodMain = () => {
  return (
    <>
      <section className="popular_food_main_section container">
        <div className="popular_food_main_text_div">
          <h2 className="popular_food_main_text">Popular Food</h2>
        </div>

        <div className="popular_food_main_content">
          <div
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food7.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Havuc Dilim</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 1550</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food8.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Square Pistachio</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 242</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food9.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Mussel Baklava</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 390</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food10.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Baklava Rolled</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 232</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food11.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Square Walnut</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 232</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food12.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Shredded Kadayif</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 242</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food13.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Caesar Salad</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 495</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food14.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Greek Salad</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 525</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
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
            className="popular_food_main_slider_inside_div"
            data-aos="zoom-in"
            data-aos-delay="50"
          >
            <LazyLoad height={200} placeholder={<div>Loading...</div>}>
              <img
                src={AppUrl.image_url + "assets/images/food15.jpg"}
                alt="baklava"
              />
            </LazyLoad>
            <div className="popular_food_main_slider_title_section">
              <p className="popular_food_main_slider_title">Chicken Sandwich</p>
              <a href=".">
                <BsHeart className="popular_food_main_slider_heart_icon" />
                {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
              </a>
            </div>
            <div className="popular_food_main_slider_description_section">
              <p className="popular_food_main_slider_description">
                Species of baklava
              </p>
            </div>
            <div className="popular_food_main_slider_price_section">
              <p className="popular_food_main_slider_price">TK. 465</p>
              <div className="popular_food_main_slider_rating_section">
                <p className="popular_food_main_slider_rating">
                  4.9{" "}
                  <FontAwesomeIcon
                    className="popular_food_main_slider_rating_star"
                    icon={faStar}
                  />
                </p>
                <a href=".">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularFoodMain;
