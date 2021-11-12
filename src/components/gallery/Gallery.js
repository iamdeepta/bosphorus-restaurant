import React, { useState, useEffect } from "react";
import "./css/gallery.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import AppUrl from "../../classes/AppUrl";
import axios from "axios";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(AppUrl.base_url + "galleryGet")
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

  function change_gallery_class() {
    let light_box_div = document.getElementById("SRLLightbox");
    light_box_div.classList.add("SRL_Gallery");
  }

  const options = {
    settings: {
      autoplaySpeed: 3000,
      boxShadow: "none",
      disableKeyboardControls: false,
      disablePanzoom: false,
      disableWheelControls: false,
      hideControlsAfter: false,
      lightboxTransitionSpeed: 0.3,
      lightboxTransitionTimingFunction: "linear",
      overlayColor: "rgba(30, 30, 30, 0.9)",
      slideAnimationType: "slide",
      slideSpringValues: [300, 50],
      slideTransitionSpeed: 0.6,
      slideTransitionTimingFunction: "linear",
      usingPreact: true,
    },
    caption: {},
    buttons: {},
    thumbnails: {},
    progressBar: {},
    translations: {}, // PRO ONLY
    icons: {}, // PRO ONLY
  };

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
            <SRLWrapper options={options} className="gallery_srl">
              {data.map((item) => (
                <a
                  href={AppUrl.image_url_backend + item.gallery_image}
                  key={item.gallery_id}
                  onClick={() => change_gallery_class()}
                >
                  <img
                    className="gallery_img"
                    src={AppUrl.image_url_backend + item.gallery_image}
                    alt={item.gallery_caption}
                    data-aos="zoom-in"
                    data-aos-delay="0"
                  />
                </a>
              ))}

              {/* <a href={AppUrl.image_url + "assets/images/gallery2.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery2.jpg"}
                  alt="Location 2"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery3.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery3.jpg"}
                  alt="Location 3"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery4.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery4.jpg"}
                  alt="Location 4"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery5.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery5.jpg"}
                  alt="Location 5"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery6.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery6.jpg"}
                  alt="Location 6"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery7.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery7.jpg"}
                  alt="Location 7"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery8.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery8.jpg"}
                  alt="Location 8"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery9.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery9.jpg"}
                  alt="Location 9"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery10.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery10.jpg"}
                  alt="Location 10"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery11.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery11.jpg"}
                  alt="Location 11"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a>
              <a href={AppUrl.image_url + "assets/images/gallery12.jpg"}>
                <img
                  className="gallery_img"
                  src={AppUrl.image_url + "assets/images/gallery12.jpg"}
                  alt="Location 12"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                />
              </a> */}
            </SRLWrapper>
          </div>
        </section>
      </SimpleReactLightbox>
    </>
  );
};

export default Gallery;
