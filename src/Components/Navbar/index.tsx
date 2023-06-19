import React from "react";
import {
  CenterSection,
  ImageButton,
  ImageContainer,
  LeftSection,
  LoginContainer,
  NavContainer,
  RightSection,
  WrapContainer,
} from "./styles";
import { Link } from "@mui/material";
import SearchSVG from "./svg/SearchSVG.svg";
import MenuSVG from "./svg/MenuSVG.svg";
import UserSVG from "./svg/UserSVG.svg";
import Logo from "./svg/Logo.svg";

const Navbar: React.FC = () => {
  return (
    <WrapContainer>
      <LoginContainer>
        <ImageButton aria-label="delete" size="large">
          <img src={UserSVG} alt="User" />
          Login/Sign Up
        </ImageButton>
      </LoginContainer>
      <NavContainer>
        <LeftSection>
          <ImageContainer src={Logo} alt="logo" />
        </LeftSection>
        <CenterSection>
          <Link href="/">Home</Link>
          <Link href="/Products">Products</Link>
          <Link href="/Diary">Diary</Link>
          <Link href="/Contact">Contact</Link>
        </CenterSection>

        <RightSection>
          <ImageButton aria-label="delete" size="large">
            <img src={MenuSVG} alt="Menu" />
          </ImageButton>
          <ImageButton aria-label="delete" size="large">
            <img src={SearchSVG} alt="Search" />
          </ImageButton>
        </RightSection>
      </NavContainer>
    </WrapContainer>
  );
};

export default Navbar;
