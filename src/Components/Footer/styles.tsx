import styled from "styled-components";

export const ContainerFooter = styled.div`
  height: 40px;
  position: relative;
  left: 0;
  top: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #d5e8ff;
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-right: 40px;
  column-gap: 30px;

  & img {
    cursor: pointer;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  & .MuiLink-root {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: unset;
  }
`;
