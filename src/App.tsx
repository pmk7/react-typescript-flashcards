import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import MySets from "./components/MySets";
import Home from "./pages/HomePage";
import Profile from "./pages/ProfilePage";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <Router>
      <AppProvider>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </AppProvider>
    </Router>
  );
}

export default App;
