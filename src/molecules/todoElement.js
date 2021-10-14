import React from "react";
import styled from "styled-components";
import { TodoText } from "../atoms/todoText";

export const TodoElement = (props) => {
  return (
    <>
      <TodoText text={props.text}></TodoText>
    </>
  );
};
