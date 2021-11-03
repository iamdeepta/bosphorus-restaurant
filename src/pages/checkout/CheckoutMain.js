import React from "react";
import "../home/css/home.css";
import Checkout from "../../components/checkout/Checkout";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const CheckoutMain = () => {
  return (
    <>
      <div className="home_page_main_div">
        <div className="home_container">
          <HeaderTop />
          <Header />
          <Checkout />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CheckoutMain;
