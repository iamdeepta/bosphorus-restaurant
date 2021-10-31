import React from "react";
import "../about-us/css/about-us.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
//import Sidebar from "../../components/sidebar/Sidebar";
import PopularFoodMain from "../../components/popularFoodMain/PopularFoodMain";
import Footer from "../../components/footer/Footer";
//import BottomNav from "../../components/bottom-nav/BottomNav";
import LazyLoad from "react-lazyload";

const PopularFoodMains = () => {
  return (
    <>
      <div className="about_us_page_main_div">
        <div className="about_us_page_container">
          <HeaderTop />
          <Header />
          {/* <Sidebar /> */}

          <LazyLoad once={true}>
            <PopularFoodMain />
            <Footer />
          </LazyLoad>
          {/* <BottomNav /> */}
        </div>
      </div>
    </>
  );
};

export default PopularFoodMains;
