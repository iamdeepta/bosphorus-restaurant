import React from "react";
import "./css/home.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import PopularFood from "../../components/popularFood/PopularFood";
import AboutUs from "../../components/about-us/AboutUs";
import Services from "../../components/services/Services";
import OurMenu from "../../components/our-menu/OurMenu";
import Testimonial from "../../components/testimonial/Testimonial";
import Reservation from "../../components/reservation/Reservation";
import BottomNav from "../../components/bottom-nav/BottomNav";

const Home = () => {
  return (
    <>
      <div className="home_page_main_div">
        <div className="home_container">
          <HeaderTop />
          <Header />
          <Sidebar />

          <Hero />
          <PopularFood />
          <AboutUs />
          <Services />
          <OurMenu />
          <Testimonial />
          <Reservation />
          <Footer />
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Home;
