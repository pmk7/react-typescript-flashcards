import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import MySets from "./components/MySets";
import Home from "./pages/HomePage";
import About from "./components/About";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mysets" element={<MySets />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
