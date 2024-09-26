import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
    </Router>
  );
}

export default App;
