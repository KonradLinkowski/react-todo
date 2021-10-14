import React from "react";
import styled from "styled-components";

const StyledTodoText = styled.p`
  font-size: 25px;
  color: red;
`;

export const TodoText = (props) => {
  return <StyledTodoText>{props.text}</StyledTodoText>;
};
