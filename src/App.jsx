import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import React, { createContext, useContext, useState } from "react";
import Anime from "./pages/Anime";

export const TitleIsEnglish = createContext(true);
export const SetTitleIsEnglish = createContext(() => {});

export default function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const setEnglish = (setting) => {
    setIsEnglish(setting);
  };

  return (
    <>
      <TitleIsEnglish.Provider value={isEnglish}>
        <SetTitleIsEnglish.Provider value={setEnglish}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/about" element={<About />} />
            <Route path="/anime" element={<Anime />} />
          </Routes>
          <Footer />
        </SetTitleIsEnglish.Provider>
      </TitleIsEnglish.Provider>
    </>
  );
}
