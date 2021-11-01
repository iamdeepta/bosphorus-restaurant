import React from "react";
import "../home/css/home.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
//import Sidebar from "../../components/sidebar/Sidebar";

import AboutUs from "../../components/about-us/AboutUs";
import Services from "../../components/services/Services";

import Testimonial from "../../components/testimonial/Testimonial";
import Reservation from "../../components/reservation/Reservation";
import Footer from "../../components/footer/Footer";
//import BottomNav from "../../components/bottom-nav/BottomNav";
import LazyLoad from "react-lazyload";

const AboutUsMain = () => {
  return (
    <>
      <div className="home_page_main_div">
        <div className="home_container">
          <HeaderTop />
          <Header />
          {/* <Sidebar /> */}

          <LazyLoad once={true}>
            <AboutUs />
            <Services />

            <Testimonial />
            <Reservation />
            <Footer />
          </LazyLoad>
          {/* <BottomNav /> */}
        </div>
      </div>
    </>
  );
};

export default AboutUsMain;
