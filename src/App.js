import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToDoUser, TodoWrapper} from "./style";
import { Button } from 'react-bootstrap';
import {Link, Outlet} from "react-router-dom";


export function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();

  if (isLoading) {
    return <TodoWrapper>Loading...</TodoWrapper>;
  }
  if (error) {
    return <TodoWrapper>Oops... {error.message}
      <Button onClick={loginWithRedirect} variant="success" >Log in</Button>
    </TodoWrapper>;
  }

  if (isAuthenticated) {
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
