import React from "react";
import { ContainerFooter, LeftSection, RightSection } from "./styles";
import { Link } from "@mui/material";
import Instagram from "./svg/Instagram.svg";
import Facebook from "./svg/Facebook.svg";
import Twitter from "./svg/Twitter.svg";
import { ImageButton } from "../Navbar/styles";

const Footer = () => {
  return (
    <ContainerFooter>
      <LeftSection>
        <Link href="/">News</Link>
        <Link href="/Products">Products</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Diary">Help</Link>
      </LeftSection>
      <RightSection>
        <ImageButton aria-label="delete" size="large">
          <img src={Instagram} alt="Instagram" />
        </ImageButton>

        <ImageButton aria-label="delete" size="large">
          <img src={Facebook} alt="Facebook" />
        </ImageButton>

        <ImageButton aria-label="delete" size="large">
          <img src={Twitter} alt="Twitter" />
        </ImageButton>
      </RightSection>
    </ContainerFooter>
  );
};

export default Footer;
