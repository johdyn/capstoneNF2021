import "./FlightTripItem.css";
import { FaBus, FaTrashAlt } from "react-icons/fa";

export default function BusTripItem({
  id,
  date,
  passengers,
  carbon,
  distance,
  radioButton,
  onRemove,
}) {
  let busType = "";
  const newDate = new Date(date).toLocaleDateString("de-DE");

  if (radioButton === 1) {
    busType = "Intercity Bus";
  } else {
    busType = "Local Bus";
  }

  return (
    <article className="trip-item">
      <h5 className="trip-item-date">{newDate}</h5>
      <div className="text-container">
        <span className="paragraph">
          <FaBus /> {busType}
        </span>
        <p className="paragraph">Passengers: {passengers}</p>
        <p className="paragraph">CO2: {carbon} kg </p>
        <p className="paragraph">{distance} km </p>
      </div>

      <FaTrashAlt className="trip-item-delete" onClick={onRemove} />
    </article>
  );
}
