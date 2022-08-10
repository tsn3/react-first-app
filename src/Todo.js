import React from 'react';
import {useState} from 'react'
import {TodoWrapper} from "./style";
import {TodoList} from "./Components/TodoList";
import {TodoInput} from "./Components/TodoInput";

export function Todo() {
  const [toDolist, setToDolist] = useState([]);

    return (
      <TodoWrapper>
        <TodoInput setToDolist={setToDolist} />
        <TodoList toDolist={toDolist} setToDolist={setToDolist} />
      </ TodoWrapper>
    );
}
