import React, { useState, useEffect } from "react";
import "./css/our-menu.css";
import AppUrl from "../../classes/AppUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
//import { BsHeart } from "react-icons/bs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";

const OurMenu = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getData1();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "productGet")
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

  function getData1() {
    axios
      .get(AppUrl.base_url + "categoryGet")
      .then(function (response) {
        if (response) {
          setData1(response.data);
          // setLoader(false);
          //console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

  function selectCat(id) {
    let category = [...document.querySelectorAll(".our_menu_category")];

    //category.map((i, j) => i.classList.add("our_menu_category_active"));
    category[id].classList.add("our_menu_category_active");
    //category[!id].classList.remove("our_menu_category_active");
  }

  return (
    <>
      <SimpleReactLightbox>
        <section className="our_menu_section container">
          <div className="our_menu_header">
            <p
              className="our_menu_specialities_text"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              SPECIALITIES
            </p>
            <h2
              className="our_menu_text"
              data-aos="fade-up"
              data-aos-delay="10"
            >
              Our Menu
            </h2>
          </div>

          <div
            className="our_menu_category_div"
            data-aos="fade-up"
            data-aos-delay="20"
          >
            <Slider {...settings2} className="our_menu_category_slider">
              {data1.map((item, index) => (
                <div
                  className="our_menu_category"
                  onClick={() => selectCat(index)}
                >
                  {item.cat_name}
                </div>
              ))}
            </Slider>
          </div>

          <div className="our_menu_slider_div">
            <Slider {...settings1}>
              {data.map((item) => (
                <div
                  className="our_menu_slider_inside_div"
                  data-aos="zoom-in"
                  data-aos-delay="20"
                  key={item.product_id}
                >
                  <SRLWrapper options={options}>
                    <img
                      src={AppUrl.image_url_backend + item.product_image}
                      alt="baklava"
                    />
                  </SRLWrapper>
                  <div className="our_menu_slider_title_section">
                    <p className="our_menu_slider_title">{item.product_name}</p>
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
                      {item.product_detail}
                    </p>
                  </div>
                  <div className="our_menu_slider_price_section">
                    <p className="our_menu_slider_price">
                      TK. {item.product_price}
                    </p>
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
              ))}
            </Slider>
          </div>
        </section>
      </SimpleReactLightbox>
    </>
  );
};

export default OurMenu;
