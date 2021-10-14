import React, { useState } from "react";
import styled from "styled-components";
import { TodoAddContainer } from "../molecules/todoAddContainer";
import { TodoElement } from "../molecules/todoElement";
import { data } from "../data/data";

export const TodoList = () => {
  const [list, setList] = useState(data)
  return (
    <>
      <TodoAddContainer add={item => setList([...list, item])} />
      {list.map((todo) => {
        return <TodoElement text={todo.text}></TodoElement>;
      })}
    </>
  );
};
