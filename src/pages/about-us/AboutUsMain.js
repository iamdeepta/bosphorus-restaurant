import React from "react";
import "./css/about-us.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import AboutUs from "../../components/about-us/AboutUs";
import Services from "../../components/services/Services";

import Testimonial from "../../components/testimonial/Testimonial";
import Reservation from "../../components/reservation/Reservation";
import Footer from "../../components/footer/Footer";

const AboutUsMain = () => {
  return (
    <>
      <div className="about_us_page_main_div">
        <div className="about_us_page_container">
          <HeaderTop />
          <Header />
          <Sidebar />

          <AboutUs />
          <Services />

          <Testimonial />
          <Reservation />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUsMain;
