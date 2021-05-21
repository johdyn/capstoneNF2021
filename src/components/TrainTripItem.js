import "./FlightTripItem.css";
import { FaTrain, FaTrashAlt } from "react-icons/fa";

export default function TrainTripItem({
  id,
  date,
  passengers,
  carbon,
  distance,
  radioButton,
  onRemove,
}) {
  let trainType = "";
  const newDate = new Date(date).toLocaleDateString("de-DE");

  if (radioButton === 1) {
    trainType = "Intercity Train";
  } else {
    trainType = "Local Train";
  }

  return (
    <article className="trip-item">
      <h5 className="trip-item-date">{newDate}</h5>
      <div className="text-container">
        <span className="paragraph">
          <FaTrain /> {trainType}
        </span>
        <p className="paragraph">Passengers: {passengers}</p>
        <p className="paragraph">CO2: {carbon} kg </p>
        <p className="paragraph">{distance} km </p>
      </div>

      <FaTrashAlt className="trip-item-delete" onClick={onRemove} />
    </article>
  );
}
