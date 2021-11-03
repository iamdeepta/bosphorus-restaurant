import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import Home from "./pages/home/Home";
// import AboutUsMain from "./pages/about-us/AboutUsMain";
// import Menu from "./pages/menu/Menu";
// import ContactUs from "./pages/contact-us/ContactUs";
// import ReservationMain from "./pages/reservation/ReservationMain";
// import Stories from "./pages/stories/Stories";
import { Route, Switch } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BottomNav from "./components/bottom-nav/BottomNav";
import Preloader from "./components/preloader/Preloader";

const Home = lazy(() => import("./pages/home/Home"));
const AboutUsMain = lazy(() => import("./pages/about-us/AboutUsMain"));
const Menu = lazy(() => import("./pages/menu/Menu"));
const ContactUs = lazy(() => import("./pages/contact-us/ContactUs"));
const ReservationMain = lazy(() =>
  import("./pages/reservation/ReservationMain")
);
const Stories = lazy(() => import("./pages/stories/Stories"));
const PopularFoodMain = lazy(() =>
  import("./pages/popular-food-main/PopularFoodMains")
);

function App() {
  //initiate animation on scroll
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <BottomNav />
      <Suspense fallback={<Preloader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUsMain} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/reservation" component={ReservationMain} />
          <Route exact path="/stories" component={Stories} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/popular-food" component={PopularFoodMain} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
