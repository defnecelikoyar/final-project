import React from "react";
import About from "./About";
import Cover from "./Cover";
import LandingPage from "./LandingPage";
import GuestBook from "./GuestBook";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import { Routes, Route } from "react-router-dom";
import '../index.css';

function App() {
    return (
    <div className="App">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Cover />} />
        </Routes>
    </div>
  );
}

export default App;