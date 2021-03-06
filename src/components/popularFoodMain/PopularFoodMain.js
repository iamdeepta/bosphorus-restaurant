import React, { useState, useEffect, useContext } from "react";
import "./css/popular-food-main.css";
// import "../popularFood/css/popular-food.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faShoppingBasket,
  //faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import AppUrl from "../../classes/AppUrl";
//import { BsHeart } from "react-icons/bs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";
import CartContext from "../../context/cart/CartContext";

const PopularFoodMain = () => {
  const { addToCart, cartItems, incrementItem } = useContext(CartContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "popularProductGetAll")
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
        <section className="popular_food_main_section container">
          <div className="popular_food_main_text_div">
            <h2 className="popular_food_main_text">Popular Food</h2>
          </div>

          <div className="popular_food_main_content">
            {data.map((item) => (
              <div
                className="popular_food_main_slider_inside_div"
                data-aos="zoom-in"
                data-aos-delay="50"
                key={item.product_id}
              >
                <LazyLoad height={200}>
                  <SRLWrapper options={options}>
                    <img
                      className="popular_food_main_slider_img_skeleton"
                      src={AppUrl.image_url_backend + item.product_image}
                      alt={item.product_name + " - " + item.product_detail}
                    />
                  </SRLWrapper>
                </LazyLoad>
                <div className="popular_food_main_slider_title_section">
                  <p className="popular_food_main_slider_title">
                    {item.product_name}
                  </p>
                  <a href=".">
                    {/* <BsHeart className="popular_food_main_slider_heart_icon" /> */}
                    {/* <FontAwesomeIcon
                  className="popular_food_main_slider_heart_icon"
                  icon={faHeart}
                /> */}
                  </a>
                </div>
                <div className="popular_food_main_slider_description_section">
                  <p className="popular_food_main_slider_description">
                    {item.product_detail}
                  </p>
                </div>
                <div className="popular_food_main_slider_price_section">
                  <p className="popular_food_main_slider_price">
                    TK. {item.product_price}
                  </p>
                  <div className="popular_food_main_slider_rating_section">
                    <p className="popular_food_main_slider_rating">
                      4.9{" "}
                      <FontAwesomeIcon
                        className="popular_food_main_slider_rating_star"
                        icon={faStar}
                      />
                    </p>
                    {cartItems.some((p) => p.product_id === item.product_id) ? (
                      <>
                        <span onClick={() => incrementItem(item.product_id)}>
                          {/* <FontAwesomeIcon
                            icon={faMinusCircle}
                            className="remove_from_cart_icon"
                          /> */}
                          <FontAwesomeIcon
                            icon={faShoppingBasket}
                            className="add_to_cart_icon"
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
          </div>
        </section>
      </SimpleReactLightbox>
    </>
  );
};

export default PopularFoodMain;
