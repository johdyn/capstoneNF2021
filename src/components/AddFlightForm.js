import "./AddFlightForm.css";
import { useState, useEffect } from "react";
import { addFlightItemToLocalStorage } from "./tripStorage";
import Button from "./Button";
import fetchFlightEstimate from "../services/FetchFlightEstimate";

import Select from "react-select";
import airportData from "../services/airports.json";

export default function AddFlightForm() {
  const [passengers, setPassengers] = useState();
  const [date, setDate] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [estimateObject, setEstimateObject] = useState();
  const [showAddButton, setShowAddButton] = useState(false);
  const [airportOptions, setAirportOptions] = useState([]);
  console.log(estimateObject);

  const airports = airportData;

  useEffect(() => {
    setAirportOptions(
      airports.map((item) => {
        let placeHolder = `${item.iata} (${item.name})`;
        return { value: placeHolder, label: placeHolder };
      })
    );
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const airportCodeDeparture = departure.slice(0, 3);
    const airportCodeDestination = destination.slice(0, 3);
    console.log(airportCodeDeparture);
    console.log(airportCodeDestination);
    const requestItem = {
      passengers,
      date,
      airportCodeDeparture,
      airportCodeDestination,
    };
    fetchFlightEstimate(requestItem).then((estimate) => {
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

  function handleDepartureChange(event) {
    const { value } = event;
    setDeparture(value);
  }

  function handleDestinationChange(event) {
    const { value } = event;
    setDestination(value);
  }
  return (
    <div>
      <form className="add-flight-form" onSubmit={handleSubmit}>
        <div className="passenger-date-container">
          <input
            type="number"
            className="add-flight-passengers"
            placeholder="No. of passengers"
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
        </div>
        <div className="select-box-container">
          <Select
            className="select-class"
            placeholder="Departure airport"
            options={airportOptions}
            onChange={handleDepartureChange}
            action="select-option"
          />
          <Select
            className="select-class"
            placeholder="Destination airport"
            options={airportOptions}
            onChange={handleDestinationChange}
            required
          />
        </div>
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
