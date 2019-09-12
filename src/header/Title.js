import React from "react";
import styled from "styled-components";
import image from "../img/image4.png";

const DefaultStyle = styled.h1`
  margin: 0.2rem;
  margin-right: 2rem;
  margin-left: 2rem;
  border-radius: 0.4rem;
  padding: 4rem 2rem;
  font-size: 5rem;
  color: white;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 50rem) {
    color: white;
    font-size: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

function Title({ title }) {
  return <DefaultStyle>{title}</DefaultStyle>;
}

export default Title;
