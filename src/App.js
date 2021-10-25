import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./pages/home/Home";
import AboutUsMain from "./pages/about-us/AboutUsMain";
import Menu from "./pages/menu/Menu";
import ReservationMain from "./pages/reservation/ReservationMain";
import Stories from "./pages/stories/Stories";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  //initiate animation on scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUsMain} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/reservation" component={ReservationMain} />
        <Route exact path="/stories" component={Stories} />
      </Switch>
    </>
  );
}

export default App;
