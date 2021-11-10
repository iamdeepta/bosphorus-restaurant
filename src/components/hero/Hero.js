import React, { useState, useEffect } from "react";
import "./css/hero.css";
import AppUrl from "../../classes/AppUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faIceCream,
  faHamburger,
  // faPizzaSlice,
  faStar,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
//import { BsHeart } from "react-icons/bs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
//import { useLightbox } from "simple-react-lightbox";
import HappyCustomer from "../happy_customer/HappyCustomer";
import { Link } from "react-router-dom";
import axios from "axios";

const Hero = () => {
  //const { openLightbox } = useLightbox();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "categoryGet")
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

  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  let settings1;
  if (window.innerWidth <= 460) {
    settings1 = {
      // dots: true,
      infinite: true,
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
      centerMode: true,
      centerPadding: "0px",
      speed: 500,
      slidesToShow: 3,
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

  // function openLightbox() {
  //   let images = document.querySelector(".hero_large_slider_image");
  //   images.classList.add("hero_large_slider_image_active");
  // }

  return (
    <>
      <SimpleReactLightbox>
        <section className="hero_main">
          <div className="hero_main_div container">
            <div className="hero_left_content">
              <h1
                className="hero_title"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                A Tale Of Turkey Healthy Food
              </h1>

              <h2
                className="hero_description"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                Indulge into the rich variety of mouth watering dishes we have
                to offer
              </h2>
              <div
                className="hero_view_menu_btn_div"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <Link to="/menu" className="hero_view_menu_btn">
                  View Menu <i className="fa fa-arrow-right"></i>
                </Link>
              </div>
              <div
                className="hero_small_slider_div"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <Slider className="hero_small_slider_main" {...settings}>
                  {data.map((item) => (
                    <div
                      className="hero_small_slider_inside_div"
                      key={item.cat_id}
                    >
                      <a href="/">
                        <FontAwesomeIcon icon={faHamburger} />
                      </a>
                      <p>{item.cat_name}</p>
                    </div>
                  ))}

                  {/* <div className="hero_small_slider_inside_div">
                    <a href=".">
                      <FontAwesomeIcon icon={faHamburger} />
                    </a>
                    <p>Baklava</p>
                  </div> */}
                  {/* <div className="hero_small_slider_inside_div">
                    <a href=".">
                      <FontAwesomeIcon icon={faPizzaSlice} />
                    </a>
                    <p>Baklava</p>
                  </div> */}
                  {/* <div className="hero_small_slider_inside_div">
                    <a href=".">
                      <FontAwesomeIcon icon={faIceCream} />
                    </a>
                    <p>Baklava</p>
                  </div> */}
                  {/* <div className="hero_small_slider_inside_div">
                    <a href=".">
                      <FontAwesomeIcon icon={faHamburger} />
                    </a>
                    <p>Baklava</p>
                  </div> */}
                </Slider>
              </div>
            </div>
            <div className="hero_right_content">
              <HappyCustomer />
              <img
                className="hero_main_baklava_img"
                src={AppUrl.image_url + "assets/images/hero_baklava.webp"}
                alt="baklava"
                data-aos="zoom-in"
                data-aos-delay="0"
              />

              <div className="hero_large_slider_div">
                <Slider {...settings1}>
                  <div
                    className="hero_large_slider_inside_div"
                    data-aos="zoom-in"
                    data-aos-delay="0"
                  >
                    <SRLWrapper options={options}>
                      <img
                        className="hero_large_slider_image"
                        src={AppUrl.image_url + "assets/images/food1.jpg"}
                        alt="baklava"
                      />
                    </SRLWrapper>

                    <div className="hero_large_slider_title_section">
                      <p className="hero_large_slider_title">Ozel Baklava</p>
                      <a href=".">
                        {/* <BsHeart className="hero_large_slider_heart_icon" /> */}
                        {/* <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      /> */}
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
                          <FontAwesomeIcon icon={faShoppingBasket} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="hero_large_slider_inside_div"
                    data-aos="zoom-in"
                    data-aos-delay="0"
                  >
                    <SRLWrapper options={options}>
                      <img
                        className="hero_large_slider_image"
                        src={AppUrl.image_url + "assets/images/food2.jpg"}
                        alt="baklava"
                      />
                    </SRLWrapper>
                    <div className="hero_large_slider_title_section">
                      <p className="hero_large_slider_title">Cevizli Baklava</p>
                      <a href=".">
                        {/* <BsHeart className="hero_large_slider_heart_icon" /> */}
                        {/* <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      /> */}
                      </a>
                    </div>
                    <div className="hero_large_slider_description_section">
                      <p className="hero_large_slider_description">
                        Species of baklava
                      </p>
                    </div>
                    <div className="hero_large_slider_price_section">
                      <p className="hero_large_slider_price">TK. 1290</p>
                      <div className="hero_large_slider_rating_section">
                        <p className="hero_large_slider_rating">
                          4.9{" "}
                          <FontAwesomeIcon
                            className="hero_large_slider_rating_star"
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
                    className="hero_large_slider_inside_div"
                    data-aos="zoom-in"
                    data-aos-delay="0"
                  >
                    <SRLWrapper options={options}>
                      <img
                        className="hero_large_slider_image"
                        src={AppUrl.image_url + "assets/images/food3.jpg"}
                        alt="baklava"
                      />
                    </SRLWrapper>
                    <div className="hero_large_slider_title_section">
                      <p className="hero_large_slider_title">
                        Fistikli Baklava
                      </p>
                      <a href=".">
                        {/* <BsHeart className="hero_large_slider_heart_icon" /> */}
                        {/* <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      /> */}
                      </a>
                    </div>
                    <div className="hero_large_slider_description_section">
                      <p className="hero_large_slider_description">
                        Species of baklava
                      </p>
                    </div>
                    <div className="hero_large_slider_price_section">
                      <p className="hero_large_slider_price">TK. 1350</p>
                      <div className="hero_large_slider_rating_section">
                        <p className="hero_large_slider_rating">
                          4.9{" "}
                          <FontAwesomeIcon
                            className="hero_large_slider_rating_star"
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
                    className="hero_large_slider_inside_div"
                    data-aos="zoom-in"
                    data-aos-delay="0"
                  >
                    <SRLWrapper options={options}>
                      <img
                        className="hero_large_slider_image"
                        src={AppUrl.image_url + "assets/images/food4.jpg"}
                        alt="baklava"
                      />
                    </SRLWrapper>
                    <div className="hero_large_slider_title_section">
                      <p className="hero_large_slider_title">Kadayif</p>
                      <a href=".">
                        {/* <BsHeart className="hero_large_slider_heart_icon" /> */}
                        {/* <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      /> */}
                      </a>
                    </div>
                    <div className="hero_large_slider_description_section">
                      <p className="hero_large_slider_description">
                        Species of baklava
                      </p>
                    </div>
                    <div className="hero_large_slider_price_section">
                      <p className="hero_large_slider_price">TK. 1660</p>
                      <div className="hero_large_slider_rating_section">
                        <p className="hero_large_slider_rating">
                          4.9{" "}
                          <FontAwesomeIcon
                            className="hero_large_slider_rating_star"
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
                    className="hero_large_slider_inside_div"
                    data-aos="zoom-in"
                    data-aos-delay="0"
                  >
                    <SRLWrapper options={options}>
                      <img
                        className="hero_large_slider_image"
                        src={AppUrl.image_url + "assets/images/food5.jpg"}
                        alt="baklava"
                      />
                    </SRLWrapper>
                    <div className="hero_large_slider_title_section">
                      <p className="hero_large_slider_title">Turkish Delight</p>
                      <a href=".">
                        {/* <BsHeart className="hero_large_slider_heart_icon" /> */}
                        {/* <FontAwesomeIcon
                        className="hero_large_slider_heart_icon"
                        icon={faHeart}
                      /> */}
                      </a>
                    </div>
                    <div className="hero_large_slider_description_section">
                      <p className="hero_large_slider_description">
                        Species of baklava
                      </p>
                    </div>
                    <div className="hero_large_slider_price_section">
                      <p className="hero_large_slider_price">TK. 690</p>
                      <div className="hero_large_slider_rating_section">
                        <p className="hero_large_slider_rating">
                          4.9{" "}
                          <FontAwesomeIcon
                            className="hero_large_slider_rating_star"
                            icon={faStar}
                          />
                        </p>
                        <a href=".">
                          <FontAwesomeIcon icon={faShoppingBasket} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <div
                  className="hero_large_slider_inside_div"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <img
                    src={AppUrl.image_url + "assets/images/food6.jpg"}
                    alt="baklava"
                  />
                  <div className="hero_large_slider_title_section">
                    <p className="hero_large_slider_title">Chocolate Baklava</p>
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
                    <p className="hero_large_slider_price">TK. 2599</p>
                    <div className="hero_large_slider_rating_section">
                      <p className="hero_large_slider_rating">
                        4.9{" "}
                        <FontAwesomeIcon
                          className="hero_large_slider_rating_star"
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
          </div>
        </section>
      </SimpleReactLightbox>
    </>
  );
};

export default Hero;
