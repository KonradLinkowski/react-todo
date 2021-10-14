import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { useState } from "react";

const StyledTodoAddBtn = styled.button`
  background: #e91e63;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
  font-family: "poppins";
  font-weight: 400;
  cursor: pointer;
  margin: 10px;
  position: relative;
  overflow: hidden;
`;

export const TodoAddBtn = (props) => {
  return <StyledTodoAddBtn onClick={props.handleAddTodo}>add</StyledTodoAddBtn>;
};
