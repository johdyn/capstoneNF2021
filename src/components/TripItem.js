export default function TripItem({ date, travelType, amountCO2 }) {
  return (
    <article className="trip-item">
      <h2>{date}</h2>
      <p classname="paragraph">{travelType}</p>
      <p>{amountCO2}</p>
    </article>
  );
}
