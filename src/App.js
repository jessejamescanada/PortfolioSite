import React from 'react';
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
