import React from "react";
import styled from "styled-components";
import { TodoAddContainer } from "../molecules/todoAddContainer";
import { TodoElement } from "../molecules/todoElement";
import { data } from "../data/data";

export const TodoList = () => {
  return (
    <>
      <TodoAddContainer />
      {data.map((todo) => {
        return <TodoElement text={todo.text}></TodoElement>;
      })}
    </>
  );
};
