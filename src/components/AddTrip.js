import "./AddTrip.css";
import { NavLink } from "react-router-dom";

export default function AddTrip() {
  return (
    <div className="add-trip-container">
      <header className="Header">
        <h1 className="h1-class">Add a trip</h1>
      </header>
      <NavLink exact to="/add-car">
        <button>Add Car Ride</button>
      </NavLink>
      <NavLink exact to="/add-flight">
        <button>Add Flight</button>
      </NavLink>
    </div>
  );
}
