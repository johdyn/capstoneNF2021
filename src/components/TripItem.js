import "./TripItem.css";
import { FaTrashAlt } from "react-icons/fa";
import { removeItemFromLocalStorage } from "./tripStorage";

export default function TripItem({
  id,
  date,
  departure,
  destination,
  passengers,
  onRemove,
}) {
  const showDate = date.slice(0, 10);
  return (
    <article className="trip-item">
      <h5 className="trip-item-date">{showDate}:</h5>
      <div className="text-container">
        <p>Passengers: {passengers}</p>
        <p>Departure: {departure}</p>
        <p className="paragraph">Destination: {destination}</p>
        <p>CO2 Emission: </p>
      </div>
      <FaTrashAlt className="trip-item-delete" onClick={onRemove} />
    </article>
  );
}
