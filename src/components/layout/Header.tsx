import { Logo } from "components/ui";
import { NavLink } from "react-router-dom";
import { RouteNames } from "utils/constants.ts";

export const Header = () => {
  return (
    <div className="bg-primary text-white h-[60px] mb-4 flex place-items-center px-4 shadow-lg">
      <div className="container flex justify-between flex-wrap">
        <Logo />
        <div className="flex gap-2">
          <NavLink
            to={RouteNames.Home}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={RouteNames.Species}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Species
          </NavLink>
        </div>
      </div>
    </div>
  );
};
