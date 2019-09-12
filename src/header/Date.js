import React from "react";
import styled from "styled-components";

const DateStyle = styled.h3`
  color: #19506a;
`;

function Date({ date }) {
  return <DateStyle>{date}</DateStyle>;
}

export default Date;
