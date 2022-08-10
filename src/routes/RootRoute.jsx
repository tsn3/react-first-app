import {BrowserRouter, Route, Routes} from "react-router-dom";
import {App} from "../App";
import {Something} from "../Components/Something";
import {Features} from "./features";
import {ThirdFeature} from "../Components/ThirdFeature";
import {Weather} from "../Components/Weather";
import {Todo} from "../Todo";
import React from "react";

export const RootRoute = () => {
  return (
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
  )
}