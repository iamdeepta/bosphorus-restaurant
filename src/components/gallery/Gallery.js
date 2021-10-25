import React from "react";
import "./css/gallery.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import AppUrl from "../../classes/AppUrl";

const Gallery = () => {
  return (
    <>
      <SimpleReactLightbox>
        <section className="gallery_section container">
          <div className="gallery_header">
            <h2 className="gallery_text" data-aos="fade-up" data-aos-delay="0">
              Gallery
            </h2>
          </div>
          <div className="gallery_main_content">
            <SRLWrapper>
              <a href={AppUrl.image_url + "assets/images/burger.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/burger.jpg"}
                  alt="Burger"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/sandwich.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/sandwich.jpg"}
                  alt="Sndwich"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/kunafa.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/kunafa.jpg"}
                  alt="Kunafa"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/icecream.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/icecream.jpg"}
                  alt="Icecream"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/chickenfry.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/chickenfry.jpg"}
                  alt="Chicken Fry"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
            </SRLWrapper>
          </div>
        </section>
      </SimpleReactLightbox>
    </>
  );
};

export default Gallery;
