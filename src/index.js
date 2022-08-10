import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {RootRoute} from "./routes/RootRoute";
import {Provider} from "react-redux";
import {store} from "./init/Redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <Provider store={store}>
      <RootRoute />
    </Provider>
  </React.StrictMode>
  </Auth0Provider>
);
