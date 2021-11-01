import React from "react";
import "../home/css/home.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
//import Sidebar from "../../components/sidebar/Sidebar";

import Contact from "../../components/contact/Contact";

import Footer from "../../components/footer/Footer";
//import BottomNav from "../../components/bottom-nav/BottomNav";
import LazyLoad from "react-lazyload";

const Menu = () => {
  return (
    <>
      <div className="home_page_main_div">
        <div className="home_container">
          <HeaderTop />
          <Header />
          {/* <Sidebar /> */}

          <LazyLoad once={true}>
            <Contact />
            <Footer />
          </LazyLoad>
          {/* <BottomNav /> */}
        </div>
      </div>
    </>
  );
};

export default Menu;
