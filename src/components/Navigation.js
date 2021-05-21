import "./Navigation.css";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [toggledIcon, setToggledIcon] = useState("home");

  return (
    <nav className="navigation-bar">
      <NavLink exact to="/">
        <FaHome
          className={
            toggledIcon === "home" ? "selected home-icon" : "home-icon"
          }
          onClick={() => setToggledIcon("home")}
        />
      </NavLink>
      <NavLink to="/add-trip" className="Nav-Link">
        <FaPlus
          className={toggledIcon === "add" ? "selected plus-icon" : "plus-icon"}
          onClick={() => setToggledIcon("add")}
        />
      </NavLink>
      <NavLink to="/summary" className="Nav-Link">
        <FaChartPie
          className={
            toggledIcon === "chart" ? "selected chart-icon" : "chart-icon"
          }
          onClick={() => setToggledIcon("chart")}
        />
      </NavLink>
    </nav>
  );
}
