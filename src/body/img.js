import React from "react";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 50rem;
  @media (max-width: 50rem) {
    width: 25rem;
  }
`;

function Img({ img }) {
  return <ImgStyled src={img} alt="image" />;
}

export default Img;
