import "./AddFlightForm.css";
import { useState } from "react";
import { addFlightItemToLocalStorage } from "./tripStorage";
import Button from "./Button";
import fetchFlightEstimate from "../services/FetchFlightEstimate";

export default function AddFlightForm() {
  const [passengers, setPassengers] = useState();
  const [date, setDate] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [estimateObject, setEstimateObject] = useState();
  const [showAddButton, setShowAddButton] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const requestItem = {
      passengers,
      date,
      departure,
      destination,
    };
    fetchFlightEstimate({ requestItem }).then((estimate) => {
      setEstimateObject(estimate);
      setShowAddButton(true);
    });
  }
  function handleAddTrip() {
    const carbon = Math.round(estimateObject.data.attributes.carbon_kg);
    const distance = Math.round(estimateObject.data.attributes.distance_value);
    const tripItem = {
      passengers,
      date,
      departure,
      destination,
      carbon,
      distance,
    };

    addFlightItemToLocalStorage(tripItem);
  }

  function handlePassengerChange(event) {
    const { value } = event.target;
    if (value > 0) {
      setPassengers(value);
    } else setPassengers(0);
  }

  function handleDateChange(date) {
    const newDate = date.target.value;

    setDate(newDate);
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
          required
        ></input>

        <input
          type="date"
          className="add-flight-datepicker"
          value={date}
          pattern="\d{4}-\d{2}-\d{2}"
          onChange={handleDateChange}
          required
        ></input>
        <input
          className="add-flight-airport-input"
          type="text"
          placeholder="Departure airport"
          name="departureAirport"
          value={departure}
          onChange={handleDepartureChange}
          required
        />

        <input
          className="add-flight-airport-input"
          type="text"
          placeholder="Destination airport"
          value={destination}
          onChange={handleDestinationChange}
          required
        />
        <div>
          <Button type="primary" text="Calculate CO2 emission"></Button>
        </div>
      </form>
      <div className="estimate-add-button-container">
        {estimateObject !== undefined ? (
          <p className="add-flight-emission-paragraph">
            Emission in kg:
            {estimateObject && estimateObject.data.attributes.carbon_kg}
          </p>
        ) : null}
        {showAddButton ? (
          <Button
            type="secondary"
            text="Add to My Trips"
            onClick={handleAddTrip}
          ></Button>
        ) : null}
      </div>
    </div>
  );
}
