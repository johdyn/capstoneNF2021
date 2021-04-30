import "./AddCarTripForm.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddFlightForm() {
  const [passengers, setPassengers] = useState("0");
  const [date, setDate] = useState("Pick the date");
  const [departure, setDeparture] = useState("departure airport");
  const [destination, setDestination] = useState("destination airport");

  function handleSubmit(event) {}

  function handleChange(event) {}

  return (
    <form className="add-car-trip-form" onSubmit={handleSubmit}>
      <input type="number"></input>
      <DatePicker className="add-car-trip-datepicker" value={date}></DatePicker>
      <input className="" type="text" value={departure} />

      <input
        className=""
        type="text"
        value={destination}
        onChange={handleChange}
      />

      <button className="calculate-co2-button" type="submit">
        Calculate CO2 emission
      </button>
      <p>Emission:</p>
    </form>
  );
}
