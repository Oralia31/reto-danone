import { AppBar, IconButton } from "@mui/material";
import styled from "styled-components";

export const WrapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ImageButton = styled(IconButton)`
  &.MuiButtonBase-root {
    width: 10px;
    height: 10px;
    padding: 11px;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 53.5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #324baa;

  & .MuiButtonBase-root {
    width: 150px;
    padding: 11px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    border-radius: 5px;
    padding: 19px;
    color: #ffffff;
    font-weight: 400;
    line-height: 2;
    margin-right: 23px;
  }
`;
export const NavContainer = styled.nav`
  width: 100%;
  height: 96px;
  display: flex;
  background-color: #e8f3ff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

export const ImageContainer = styled.img`
  width: 28%;
`;

export const RightSection = styled.div`
  width: 32%;
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  column-gap: 25px;
`;

export const CenterSection = styled.div`
  width: 32%;
  display: flex;
  justify-content: space-evenly;
  padding: unset;

  & .MuiLink-root {
    text-decoration: unset;
    font-weight: 600;
    font-size: 14px;
    color: #0a135c;
  }
`;

export const LeftSection = styled.div`
  width: 32%;
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
`;

export const NavBarContainer = styled(AppBar)<{ bgcolor?: string }>`
  & .MuiPaper-root {
    box-shadow: unset;
  }
  & .MuiToolbar-root {
    width: 100%;
    height: 40px;
    display: flex;
    padding: 15px 60px 15px 60px;
    justify-content: space-between;
    //background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#2F59FF")};
    background-color: #85b4ff !important;
    color: white;
    border: unset;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    border-radius: 25px;
    //background-color: #b3d3ff36;
    width: 60px;
    height: 50px;
    font-size: 15px;
  }
`;
