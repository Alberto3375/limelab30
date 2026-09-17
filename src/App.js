import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BusinessAreas from "./components/BusinessAreas";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Values from "./components/Values";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <Header />
      <main>
        <Hero />
        <BusinessAreas />
        <Services />
        <Gallery />
        <Values />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
