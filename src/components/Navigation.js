import "./Navigation.css";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ReactComponent as Add } from "../icons/add.svg";
import { ReactComponent as Home } from "../icons/home.svg";
import { ReactComponent as Pie } from "../icons/pie-chart.svg";

export default function Navigation() {
  return (
    <nav className="navigation-bar">
      <NavLink exact to="/">
        <FaHome className="home-icon" />
      </NavLink>
      <NavLink to="/add" className="Nav-Link">
        <FaPlus className="plus-icon" />
      </NavLink>
      <NavLink to="/summary" className="Nav-Link">
        <FaChartPie className="chart-icon" />
      </NavLink>
    </nav>
  );
}
