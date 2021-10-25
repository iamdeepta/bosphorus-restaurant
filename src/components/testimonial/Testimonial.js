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
            src={AppUrl.image_url + "assets/images/person-burger.jpg"}
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
                  Bosphorus has the most intriguing food order system in the
                  country. UI in both their app and web is very simple and easy
                  to use, enhancing the UX. Their delivery man are also quite
                  professional and knows the neighborhood well. Till now I never
                  had to guide them to my address for delivery.
                </p>

                <p className="testimonial_slider_customer_name">Alina Joli</p>
                <p className="testimonial_slider_customer_des">Food Lover</p>
              </div>

              <div className="testimonial_slider_inside_div">
                <p className="testimonial_slider_reviews">
                  Bosphorus has the most intriguing food order system in the
                  country. UI in both their app and web is very simple and easy
                  to use, enhancing the UX. Their delivery man are also quite
                  professional and knows the neighborhood well. Till now I never
                  had to guide them to my address for delivery.
                </p>

                <p className="testimonial_slider_customer_name">Alina Joli</p>
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
