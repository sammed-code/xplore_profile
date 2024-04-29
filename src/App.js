import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import Explore from "./page/Explore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
