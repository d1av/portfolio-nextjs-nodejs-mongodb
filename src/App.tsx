import React from "react";
import "./Globals.scss";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
