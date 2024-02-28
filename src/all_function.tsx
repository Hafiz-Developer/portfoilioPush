import React from "react";
import Navbar from "./assets/components/navbar";
import Info from "./assets/components/myInfo";
import About from "./assets/components/about";
import Services from "./assets/components/services";
import Pricing from "./assets/components/pricing";
import Client from "./assets/components/client";
import Team from "./assets/components/mySkill";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer";

import Project from "./assets/components/myProject";

export const AllFunction: React.FC = () => {
  return (
    <>
      <Navbar />
      <Info />
      <About />
      <Project />
      <Team />
      <Services />
      <Pricing />
      <Client />
      <Contact />
      <Footer />
    </>
  );
};
