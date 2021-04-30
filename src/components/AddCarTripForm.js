import "./AddCarTripForm.css";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddCarTripForm() {
  const [distance, setDistance] = useState("Distance in km...");
  const [date, setDate] = useState("Pick the date");
  function handleSubmit(event) {}

  function handleChange(event) {
    setDistance(event.target.value);
  }

  return (
    <form className="add-car-trip-form" onSubmit={handleSubmit}>
      <input
        className="add-car-trip-distanceinput"
        type="text"
        value={distance}
        onChange={handleChange}
      />
      <DatePicker className="add-car-trip-datepicker" value={date}></DatePicker>
      <select className="add-car-trip-select"></select>
      <select className="add-car-trip-select"></select>
      <select className="add-car-trip-select"></select>
      <button className="calculate-co2-button" type="submit">
        Calculate CO2 emission
      </button>
      <p>Emission:</p>
    </form>
  );
}
