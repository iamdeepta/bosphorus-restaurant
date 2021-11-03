import React from "react";
import "./css/blur-bg.css";

const BlurBg = () => {
  function closeCart() {
    var bg = document.querySelector(".blur_bg_main");
    bg.classList.remove("blur_bg_main_active");

    var cart = document.querySelector(".cart_sidebar_div");
    cart.classList.remove("cart_sidebar_div_active");
  }

  return (
    <>
      <div className="blur_bg_main" onClick={() => closeCart()}></div>
    </>
  );
};

export default BlurBg;
