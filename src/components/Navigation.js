import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div class="Navigation-container">
      <NavLink exact to="/" className="">
        <FaHome /> Home
      </NavLink>
      <NavLink exact to="/summary" className="Nav-Link">
        <FaChartPie /> summary
      </NavLink>
      <NavLink exact to="/add" className="Nav-Link">
        <FaPlus /> add
      </NavLink>
    </div>
  );
}
