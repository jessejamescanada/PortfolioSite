import React from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {

  function topScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="App">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <i className="fas fa-arrow-up" onClick={topScroll}></i>
    </div>
  );
}

export default App;
