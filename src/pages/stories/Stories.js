import React from "react";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Gallery from "../../components/gallery/Gallery";
//import Reservation from "../../components/reservation/Reservation";
import Footer from "../../components/footer/Footer";
import BottomNav from "../../components/bottom-nav/BottomNav";

const Stories = () => {
  return (
    <>
      <div className="about_us_page_main_div">
        <div className="about_us_page_container">
          <HeaderTop />
          <Header />
          <Sidebar />

          <Gallery />
          <Footer />
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default Stories;
