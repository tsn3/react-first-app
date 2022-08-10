import { useAuth0 } from '@auth0/auth0-react';
import {ToDoUser, TodoWrapper} from "../../style";
import {Button} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import React from "react";

export const Authenticated = () => {
 const {user, logout} = useAuth0();

  return (
    <TodoWrapper>
      <ToDoUser>
        Hello, {user.name}{' '}
        <Button onClick={() => logout({ returnTo: window.location.origin })} variant="link" >
          Log out
        </Button>
      </ToDoUser>
      <div>
        <h1>Welcome to App!</h1>
        <nav
          style={{
            paddingBottom: "1rem",
          }}
        >
          <Link to="/features">Features</Link> |{" "}
          <Link to="/expenses">Something</Link>
        </nav>
      </div>
      <Outlet />
    </TodoWrapper>
  )
}