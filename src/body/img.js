import React from "react";
import styled from "styled-components";

const ImgStyled = styled.img`
  width: 50rem;
 
`;

function Img({ img }) {
  return <ImgStyled src={img} alt="image" />;
}

export default Img;
