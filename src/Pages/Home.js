import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Reviews from "../Components/Reviews";
import Documents from "../Components/Documents";
import Team from "../Components/Team";
import Partners from "../Components/Partners";
import Footer from "../Components/Footer";
import "../Styles/Home.css"; 

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <Reviews />
      <Documents/>
      <Team />
      <Partners/>
      <Footer />
    </div>
  );
}

export default Home;
