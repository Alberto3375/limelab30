import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Clients from './components/Clients';


const App = () => {
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <Hero />
      <Services />
      <Values />
      <About />
      <Clients /> {/* Nueva sección */}
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default App;