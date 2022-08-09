import React from 'react';
import {useState} from 'react'
import {TodoInput} from './TodoInput'
import {TodoList} from './TodoList'
import {TodoWrapper} from "./style";

export function Todo() {
  const [toDolist, setToDolist] = useState([]);

  // const toDolist = [
  //   {id: 1, text: 'drink coffee', isDone: false},
  //   {id: 2, text: 'drink milk', isDone: false},
  //   {id: 3, text: 'learning React', isDone: false},
  // ];
    return (
      <TodoWrapper>
        <TodoInput setToDolist={setToDolist} />
        <TodoList toDolist={toDolist} setToDolist={setToDolist} />
      </ TodoWrapper>
    );
}
