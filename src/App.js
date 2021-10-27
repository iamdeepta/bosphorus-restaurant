import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./pages/home/Home";
import AboutUsMain from "./pages/about-us/AboutUsMain";
import Menu from "./pages/menu/Menu";
import ContactUs from "./pages/contact-us/ContactUs";
import ReservationMain from "./pages/reservation/ReservationMain";
import Stories from "./pages/stories/Stories";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BottomNav from "./components/bottom-nav/BottomNav";

function App() {
  //initiate animation on scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <BottomNav />
      <Switch>
        <Route exact path="/bosphorus" render={Home} />
        <Route exact path="/about-us" render={AboutUsMain} />
        <Route exact path="/menu" render={Menu} />
        <Route exact path="/reservation" render={ReservationMain} />
        <Route exact path="/stories" render={Stories} />
        <Route exact path="/contact" render={ContactUs} />
      </Switch>
    </>
  );
}

export default App;
