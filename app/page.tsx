"use client";

import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LogIn from "./components/LogIn";
import PopularProd from "./components/PopularProd";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularProd />
      <Gallery />
      <About />
      <Footer />
      <LogIn />
    </>
  );
}
