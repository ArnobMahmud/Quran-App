import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frame from "../components/frame";
import SurahPage from "../pages/surahpage";
import Surah from "../components/surah";
import JuzPage from "../pages/juzpage";

export default function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />} />
          <Route path="/surah" element={<SurahPage />} />
          <Route path="/surah/:surahId" element={<Surah />} />
          <Route path="/juz" element={<JuzPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
