import React from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Reference from "../Components/Reference";
import Contact from "../Components/Contact";
import Techno from "../Components/Techno";

export const HomeScreen = () => {
  return (
    <div className="object-cover container-home bg-gray-100 min-h-screen py-12">
      <Header />
      <main>
        {/* <About />
        <Reference />
        <Techno />
        <Contact /> */}
      </main>
    </div>
  );
};
