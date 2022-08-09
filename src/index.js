import { Auth0Provider } from "@auth0/auth0-react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {App} from "./App";
import {Features} from "./routes/features";
import {Feature} from "./routes/feature";
import {Something} from "./Something";
import {Weather} from "./Weather";
import {ThirdFeature} from "./ThirdFeature";
import {Todo} from "./Todo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={window.location.origin}
  >
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="expenses" element={<Something />} />
          <Route path="features" element={<Features />} >
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a feature</p>
                </main>
              }
            />
            <Route path=":featureId" element={<Feature />} />
            <Route path="third_feature" element={<ThirdFeature />} />
            <Route path="weather" element={<Weather />} />
            <Route path="todo" element={<Todo />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
);
