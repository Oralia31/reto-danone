import styled from "styled-components";
import Image from "./svg/Image.svg";

export const ContainerSection = styled.section`
  width: 100%;
  min-height: calc(100% - 50px);
  padding-bottom: 50px;
  position: relative;
  top: 500px;
  text-align: center;

  & h1 {
    font-size: 36px;
    font-weight: 700;
    color: #324baa;
  }

  & p {
    font-size: 18px;
    font-weight: 400;
    color: #324baa;
  }

  & .MuiButton-root {
    border: 1px solid #324baa;
    color: #324baa;
    margin-top: 20px;
  }
`;

export const ContainerParallax = styled.div`
  max-width: 100%;
  position: relative;

  &::after {
    content: "";
    top: 0rem;
    right: 0rem;
    width: 100%;
    height: 500px;
    background-image: url("${Image}");
    position: absolute;
    background-repeat: no-repeat;
  }
`;
