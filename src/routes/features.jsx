import {NavLink, Outlet} from "react-router-dom";
import { getFeatures } from "../data";

export const Features = () => {
  let features = getFeatures();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {features.map((feature) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "green" : "",
              };
            }}
            to={`/features/${feature.url}`}
            key={feature.url}
          >
            {feature.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}