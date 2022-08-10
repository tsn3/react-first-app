import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoWrapper} from "./style";
import { Button } from 'react-bootstrap';
import {Authenticated} from "./Components/Authenticated";
import {NotAuthenticated} from "./Components/NotAuthenticated";

export function App() {
  const {
    isLoading,
    error,
    loginWithRedirect,
    isAuthenticated
  } = useAuth0();

  if (isLoading) {
    return <TodoWrapper>Loading...</TodoWrapper>;
  }
  if (error) {
    return <TodoWrapper>Oops... {error.message}
      <Button onClick={loginWithRedirect} variant="success" >Log in</Button>
    </TodoWrapper>;
  }
  return (
     isAuthenticated ? <Authenticated /> : <NotAuthenticated />
  )
}
