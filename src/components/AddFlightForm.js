import "./AddFlightForm.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getItemsFromLocalStorage, addItemToLocalStorage } from "./tripStorage";

export default function AddFlightForm() {
  const [passengers, setPassengers] = useState();
  const [date, setDate] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const tripItem = {
      passengers,
      date,
      departure,
      destination,
    };
    console.log(tripItem);
    const requestItem = {
      passengers,
      departure,
      destination,
    };

    addItemToLocalStorage(tripItem);
  }
  function handleAddTrip() {}
  function handlePassengerChange(event) {
    const { value } = event.target;
    setPassengers(value);
  }

  function handleDateChange(date) {
    setDate(date);
  }

  function handleDestinationChange(event) {
    setDestination(event.target.value);
  }

  function handleDepartureChange(event) {
    const { value } = event.target;
    setDeparture(value);
  }

  return (
    <div>
      <form className="add-flight-form" onSubmit={handleSubmit}>
        <input
          type="number"
          className="add-flight-passengers"
          placeholder="Number of passengers"
          value={passengers}
          onChange={handlePassengerChange}
        ></input>

        <DatePicker
          className="add-flight-datepicker"
          selected={date}
          onChange={handleDateChange}
        ></DatePicker>
        <input
          className="add-flight-airport-input"
          type="text"
          placeholder="Departure airport"
          name="departureAirport"
          value={departure}
          onChange={handleDepartureChange}
        />

        <input
          className="add-flight-airport-input"
          type="text"
          placeholder="Destination airport"
          value={destination}
          onChange={handleDestinationChange}
        />
        <div>
          <button className="add-flight-calculate-button" type="submit">
            Calculate CO2 emission
          </button>
          <p>Emission:</p>
          <button className="add-flight-addtrip-button" onClick={handleAddTrip}>
            Add to My Trips
          </button>
        </div>
      </form>
    </div>
  );
}
