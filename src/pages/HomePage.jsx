import React from "react";
import Banner from "../components/Banner";
import Carrosel from "../components/Carrosel";
import Tecnologias from "../components/TecnologiasSection";
import Footer from "../components/Footer";

import Formacao from "../components/Formacao";
import Sobre from "../components/Sobre";
import BannerCTA from "../components/BannerCTA";
import Contato from "../components/ContatoCTA";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Sobre />
      <Carrosel />
      <Formacao />
      <BannerCTA />
      <Tecnologias />
      <Contato />
      <Footer />
    </>
  );
};

export default HomePage;
