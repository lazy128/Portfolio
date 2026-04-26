import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

// App.jsx
const App = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="container mx-auto max-w-7xl">
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;