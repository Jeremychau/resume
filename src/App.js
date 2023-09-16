import React from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
// import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import resumeJsonData from "./resumeData.json"

import "./App.css";

const App = () => {

  return (
    <div className="App">
      <Header data={resumeJsonData.main} />
      <About data={resumeJsonData.main} />
      <Resume data={resumeJsonData.resume} />
      <Portfolio data={resumeJsonData.portfolio} />
      {/* <Testimonials data={resumeJsonData.testimonials} /> */}
      <Footer data={resumeJsonData.main} />
    </div>
  );
};

export default App;
