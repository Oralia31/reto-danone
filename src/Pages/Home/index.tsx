import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { ContainerParallax, ContainerSection } from "./styles";
import { Button } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />

      <ContainerParallax />
      <br />
      <ContainerSection>
        <h1>Keep track of your daily calorie limit!</h1>
        <p>
          Tell us your maximum daily calorie intake and we will recommend the
          products that best suit your goals!
        </p>

        <Button variant="outlined">Start now</Button>
      </ContainerSection>

      <Footer />
    </div>
  );
};

export default Home;
