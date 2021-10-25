import React from "react";
import "./css/menu.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import OurMenu from "../../components/our-menu/OurMenu";

import Reservation from "../../components/reservation/Reservation";
import Footer from "../../components/footer/Footer";

const Menu = () => {
  return (
    <>
      <div className="about_us_page_main_div">
        <div className="about_us_page_container">
          <HeaderTop />
          <Header />
          <Sidebar />

          <OurMenu />

          <Reservation />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Menu;
