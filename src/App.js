import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from './components/AboutUs';  // ✅ Correct import
import Contact from "./components/Contact";
import Recommendations from "./components/Recommendations";
import Chatbot from "./components/Chatbot";  // ✅ Import chatbot

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />  {/* ✅ Update About route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/chatwithus" element={<Chatbot />} />  {/* ✅ Add chatbot route */}
      </Routes>
    </Router>
  );
}

export default App;
