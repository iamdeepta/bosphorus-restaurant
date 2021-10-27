import React from "react";
import HeaderTop from "../header-top/HeaderTop";
import Header from "../header/Header";
//import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";
import PopularFood from "../popularFood/PopularFood";
import AboutUs from "../about-us/AboutUs";
import Services from "../services/Services";
import OurMenu from "../our-menu/OurMenu";
import Testimonial from "../testimonial/Testimonial";
import Reservation from "../reservation/Reservation";
//import BottomNav from "../bottom-nav/BottomNav";
//import useIsVisible from "../../customHooks/useIsVisible";
import LazyLoad from "react-lazyload";

const HomeMain = () => {
  //   const elemRef = useRef();
  //   const isVisible = useIsVisible(elemRef);
  return (
    <>
      <HeaderTop />
      <Header />
      {/* <BottomNav /> */}
      {/* <Sidebar /> */}

      <Hero />

      {/* <div ref={elemRef}></div> */}
      <PopularFood />

      <LazyLoad offset={400} once={true}>
        <AboutUs />
        <Services />
        <OurMenu />
        <Testimonial />
        <Reservation />
        <Footer />
      </LazyLoad>
    </>
  );
};

export default HomeMain;
