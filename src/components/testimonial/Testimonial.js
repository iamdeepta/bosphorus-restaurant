import React from "react";
import "./css/testimonial.css";
import AppUrl from "../../classes/AppUrl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <section className="testimonial_section container">
        <div className="testimonial_header">
          <p className="testimonial_text" data-aos="fade-up" data-aos-delay="0">
            TESTIMONIAL
          </p>
          <h2
            className="testimonial_customer_reviews_text"
            data-aos="fade-up"
            data-aos-delay="10"
          >
            Customer Reviews
          </h2>
        </div>

        <div className="testimonial_content">
          <img
            className="testimonial_img"
            src={AppUrl.image_url + "assets/images/person-burger.webp"}
            alt="burger"
            data-aos="fade-right"
            data-aos-delay="20"
          />

          <FontAwesomeIcon
            className="testimonial_slider_upper_quote"
            icon={faQuoteLeft}
          />

          <FontAwesomeIcon
            className="testimonial_slider_lower_quote"
            icon={faQuoteRight}
          />

          <div
            className="testimonial_slider_div"
            data-aos="fade-left"
            data-aos-delay="20"
          >
            <Slider className="testimonial_slider_main" {...settings}>
              <div className="testimonial_slider_inside_div">
                <p className="testimonial_slider_reviews">
                  Such a beautiful place to have a hangout with friends. Serves
                  good coffee and Turkish tea. Tried their fries, it was good.
                  I've tried Latte, Hazelnut latte, Hazelnut Frappe, Virgin
                  Mohito, Capuccino - all were good. The place looks good too.
                  Interior is beautiful and the outside garden area is also lit.
                  Only downside is the price. It's a bit costly.
                </p>

                <p className="testimonial_slider_customer_name">
                  Hasanuzzaman Mamun
                </p>
                <p className="testimonial_slider_customer_des">Food Lover</p>
              </div>

              <div className="testimonial_slider_inside_div">
                <p className="testimonial_slider_reviews">
                  Wonderful environment. Soothing ambiance, proper beautiful
                  decor, friendly service, food and drinks are really healthy
                  and good and baklava is really tasty. Not too sweet and 100%
                  imported from Turkey. Prices are very reasonable. You won't
                  experience it unless you visit the place. And can guarantee
                  you will repeat your visit quite often. So my recommendation
                  to visit atleast once to confirm the word I wtote above.
                </p>

                <p className="testimonial_slider_customer_name">
                  Golam Md Iftekhar
                </p>
                <p className="testimonial_slider_customer_des">Food Lover</p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
