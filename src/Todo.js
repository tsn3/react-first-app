import {useState} from 'react'
import {TodoInput} from './TodoInput'
import {TodoList} from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {TodoWrapper} from "./style";

export function Todo() {
  // const toDolist = [
  //   {id: 1, text: 'drink coffee', isDone: false},
  //   {id: 2, text: 'drink milk', isDone: false},
  //   {id: 3, text: 'learning React', isDone: false},
  // ];
  const [toDolist, setToDolist] = useState([]);
  return (
    <TodoWrapper>
      <TodoInput setToDolist={setToDolist} />
      <TodoList toDolist={toDolist} setToDolist={setToDolist} />     
    </TodoWrapper>
  );
}
