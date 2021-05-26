import "./Navigation.css";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="navigation-bar">
      <NavLink exact to="/" activeClassName="selected">
        <FaHome
          className={pathname === "/" ? "selected home-icon" : "home-icon"}
        />
      </NavLink>
      <NavLink to="/add-trip" className="Nav-Link">
        <FaPlus
          className={
            pathname.includes("/add-trip") ? "selected plus-icon" : "plus-icon"
          }
        />
      </NavLink>
      <NavLink to="/summary" className="Nav-Link">
        <FaChartPie
          className={
            pathname === "/summary" ? "selected chart-icon" : "chart-icon"
          }
        />
      </NavLink>
    </nav>
  );
}
