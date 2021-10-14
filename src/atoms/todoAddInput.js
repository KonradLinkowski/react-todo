import React from "react";
import styled from "styled-components";

const StyledTodoAddInput = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 2px solid #e91e63;
`;

export const TodoAddInput = () => {
  return <StyledTodoAddInput></StyledTodoAddInput>;
};
