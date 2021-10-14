import React from "react";
import styled from "styled-components";
import { TodoAddBtn } from "../atoms/todoAddBtn";
import { TodoAddInput } from "../atoms/todoAddInput";
import { data } from "../data/data";
import { useState } from "react";

const StyledTodoAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoAddContainer = () => {
  const [items, setItems] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const handleAddTodo = () => {
    const newItem = {
      text: "dupa",
      isDone: false,
    };
    setItems([...items, newItem]);
    console.log(items);
  };
  return (
    <StyledTodoAddContainer>
      <TodoAddBtn handleAddTodo={handleAddTodo}></TodoAddBtn>
      <TodoAddInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </StyledTodoAddContainer>
  );
};
