import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {useState} from 'react'
import {TodoInput} from './TodoInput'
import {TodoList} from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToDoUser, TodoWrapper} from "./style";
import { Button } from 'react-bootstrap';

export function Todo() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const [toDolist, setToDolist] = useState([]);

  if (isLoading) {
    return <TodoWrapper>Loading...</TodoWrapper>;
  }
  if (error) {
    return <TodoWrapper>Oops... {error.message}
      <Button onClick={loginWithRedirect} variant="success" >Log in</Button>
    </TodoWrapper>;
  }
  // const toDolist = [
  //   {id: 1, text: 'drink coffee', isDone: false},
  //   {id: 2, text: 'drink milk', isDone: false},
  //   {id: 3, text: 'learning React', isDone: false},
  // ];

  if (isAuthenticated) {
    return (
      <TodoWrapper>
        <ToDoUser>
          Hello, {user.name}{' '}
          <Button onClick={() => logout({ returnTo: window.location.origin })} variant="link" >
            Log out
          </Button>
        </ToDoUser>
        <TodoInput setToDolist={setToDolist} />
        <TodoList toDolist={toDolist} setToDolist={setToDolist} />
      </TodoWrapper>
    );
  } else {
    return (
      <TodoWrapper>
        <ToDoUser>
          Hello, User. To continue working with the application, please register
          <Button onClick={loginWithRedirect} variant="link" >
            Log in
          </Button>
        </ToDoUser>
      </TodoWrapper>
    );
  }
}
