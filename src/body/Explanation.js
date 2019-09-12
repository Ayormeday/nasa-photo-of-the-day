import React from "react";
import styled from "styled-components";

const ExpStyle = styled.p`
  margin: 4rem;
  color: #22566f;
  text-align: justify;
  @media (max-width: 50rem) {
  }
`;

function Explanation({ explanation }) {
  return <ExpStyle>{explanation}</ExpStyle>;
}

export default Explanation;
