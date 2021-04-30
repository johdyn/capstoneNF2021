import TripItem from "./TripItem";

export default function Triplist() {
  return (
    <div className="trip-container">
      <TripItem date="01-01-2022" travelType="Flight" amountCO2="4000 kg CO2" />
      <article className="trip-item">01-01-2021: Car ride 20 kg CO2</article>
      <article className="trip-item">01-01-2021: Flight 20 kg CO2</article>
      <article className="trip-item">01-01-2021: Car ride 20 kg CO2</article>
      <article className="trip-item">01-01-2021: Car ride 20 kg CO2</article>
      <article className="trip-item">01-01-2021: Flight 20 kg CO2</article>
      <article className="trip-item">01-01-2021: Car ride 20 kg CO2</article>
    </div>
  );
}
