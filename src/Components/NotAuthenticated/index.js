import { useAuth0 } from '@auth0/auth0-react';
import {ToDoUser, TodoWrapper} from "../../style";
import {Button} from "react-bootstrap";
import React from "react";


export const NotAuthenticated = () => {
  const {loginWithRedirect} = useAuth0();
  return (
    <TodoWrapper>
      <ToDoUser>
        Hello, User. To continue working with the application, please register
        <Button onClick={loginWithRedirect} variant="link" >
          Log in
        </Button>
      </ToDoUser>
    </TodoWrapper>
  )
}
