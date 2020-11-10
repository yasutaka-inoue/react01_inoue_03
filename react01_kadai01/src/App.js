import React from 'react';
import "./style.css";
import Header from "./Header";
import MainVisual from "./MainVisual";
import About from "./About";
import Course from "./Course";
import News from "./News";
import Access from "./Access";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
        <Header/>
        <MainVisual/>
        <div className="wrap"> 
          <About/>
          <Course/>
          <News/>
          <Access/>
          <Contact/>
        </div>
        <Footer/>
    </>
  )
}

export default App

