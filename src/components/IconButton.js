import "./IconButton.css";
import { FaPlane, FaCar, FaBus, FaTrain } from "react-icons/fa";

export default function IconButton({ type, onClick }) {
  let icon = "";
  if (type === "plane") {
    icon = <FaPlane />;
  }
  if (type === "car") {
    icon = <FaCar />;
  }
  if (type === "train") {
    icon = <FaTrain />;
  }
  if (type === "bus") {
    icon = <FaBus />;
  }
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
    </button>
  );
}
