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
  const vehicleModelWithoutYear = vehicleModel.slice(
    0,
    vehicleModel.length - 6
  );
  return (
    <article className="trip-item">
      <h2 className="trip-item-date">{newDate}</h2>
      <div className="text-container">
        <p className="paragraph">{vehicleMake}</p>

        <p className="paragraph model-paragraph">{vehicleModelWithoutYear}</p>

        <p className="paragraph">{distance} km</p>
        <p className="paragraph">CO2: {estimate} kg </p>
      </div>

      <FaTrashAlt className="trip-item-delete" onClick={onRemove} />
    </article>
  );
}
