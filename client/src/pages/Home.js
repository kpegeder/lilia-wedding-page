import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
