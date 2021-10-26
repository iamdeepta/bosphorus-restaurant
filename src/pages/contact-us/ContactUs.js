import React from "react";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import Contact from "../../components/contact/Contact";

import Footer from "../../components/footer/Footer";

const Menu = () => {
  return (
    <>
      <div className="about_us_page_main_div">
        <div className="about_us_page_container">
          <HeaderTop />
          <Header />
          <Sidebar />

          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Menu;
