import React from "react";
import "./css/home.css";
import HeaderTop from "../../components/header-top/HeaderTop";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home_page_main_div">
        <div className="home_container">
          <HeaderTop />
          <Header />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
