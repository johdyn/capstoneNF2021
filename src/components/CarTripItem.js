import "./CarTripItem.css";
import { FaTrashAlt } from "react-icons/fa";

export default function CarTripItem({
  id,
  date,
  distance,
  vehicleMake,
  vehicleModel,
  estimate,
  onRemove,
}) {
  const newDate = new Date(date).toLocaleDateString("de-DE");

  return (
    <article className="trip-item">
      <h5 className="trip-item-date">{newDate}:</h5>
      <div className="text-container">
        <p>{vehicleMake}</p>
        <p>Model: {vehicleModel}</p>
        <p className="paragraph">Distance: {distance} km</p>
        <p>CO2 Emission: {estimate} kg </p>
      </div>
      <FaTrashAlt className="trip-item-delete" onClick={onRemove} />
    </article>
  );
}
