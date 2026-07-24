import React from "react";

import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Features from "../../components/Features/Feature";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

const Home = () => {

  return (

    <div className="min-h-screen">

      {/* Hero Section */}
      <Hero />


      {/* About Section */}
      <About />


      {/* Features Section */}
      <Features />

    <Contact/>
      {/* Footer */}
      <Footer />

    </div>

  );

};


export default Home;