import { NavLink } from "react-router-dom";
import { RouteNames } from "utils/constants.ts";

export const Logo = () => (
  <div className="text-headerOne cursor-pointer">
    <NavLink to={RouteNames.Home}>Logo</NavLink>
  </div>
);
