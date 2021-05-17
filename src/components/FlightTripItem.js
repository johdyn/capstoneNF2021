import "./FlightTripItem.css";
import { FaPlane, FaTrashAlt } from "react-icons/fa";

export default function FlightTripItem({
  id,
  date,
  passengers,
  departure,
  destination,
  carbon,
  distance,
  onRemove,
}) {
  const newDate = new Date(date).toLocaleDateString("de-DE");
  const departureCode = `${departure.slice(0, 3)} `;
  const destinationCode = ` ${destination.slice(0, 3)}`;
  return (
    <article className="trip-item">
      <h5 className="trip-item-date">{newDate}</h5>
      <div className="text-container">
        <span className="paragraph">
          {departureCode}
          <FaPlane />
          {destinationCode}
        </span>

        <p className="paragraph"></p>
        <p className="paragraph">Passengers: {passengers}</p>
        <p className="paragraph">CO2: {carbon} kg </p>
        <p className="paragraph">{distance} km </p>
      </div>

      <FaTrashAlt className="trip-item-delete" onClick={onRemove} />
    </article>
  );
}
