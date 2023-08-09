import React from "react";
import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";


const App = () => {
  return (
    <>
    <Sidebar />
    <main className='main'>
    <Home />
    <About />
    <Skills />
    <Resume />
    <Works />
    <Contact />
    </main>
    </>
  )
}

export default App;
