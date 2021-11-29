import Home from "./pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import IconMenu from "./components/Menu/Menu";
import Review from "./pages/Review";
import SingleCharacter from "./pages/SingleCharacter";
import Reviews from "./pages/Reviews";
const App = () => {
  return (
    <>
      <NavBar />
      <IconMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/character/:id" element={<SingleCharacter />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
