import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
    </Router>
  );
}

export default App;
