import React from "react";
import "./css/home.css";
import HomeMain from "../../components/home-main/HomeMain";

const Home = () => {
  return (
    <>
      <div className="home_page_main_div">
        <div className="home_container">
          <HomeMain />
        </div>
      </div>
    </>
  );
};

export default Home;
