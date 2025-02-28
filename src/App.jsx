import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Service from "./components/Service";
import About from "./components/About";
import Industry from "./components/Industry";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/industry" element={<Industry />} />
      </Routes>
    </Router>
  );
};

export default App;
