import React from "react";
import styled from "styled-components";

const StyledPre = styled.pre`
  background-color: #35374c;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
`;
//Simple component to display an object as formatted json
const Debug = ({ object, active }) =>
  !active ? null : <StyledPre>{JSON.stringify(object, null, 2)}</StyledPre>;

export default Debug;
