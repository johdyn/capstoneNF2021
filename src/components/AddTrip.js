import "./AddTrip.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function AddTrip() {
  let history = useHistory();
  const carClick = () => history.push("/add-car");
  const flightClick = () => history.push("/add-flight");

  return (
    <div className="add-trip-container">
      <header className="add-trip-header">
        <h1 className="h1-class">Add a trip</h1>
      </header>

      <button onClick={carClick}>Add Car Ride</button>

      <button onClick={flightClick}>Add Flight</button>
    </div>
  );
}
