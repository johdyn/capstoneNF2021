import "./AddBusForm.css";
import Header from "./Header";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addBusItemToLocalStorage } from "../services/tripStorage";
import Button from "./Button";
import { calculateBusEstimate } from "../services/calculateBusEstimate";

export default function AddCarTripForm() {
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState();
  const [carbonEstimate, setCarbonEstimate] = useState();
  const [showAddButton, setShowAddButton] = useState(false);
  const [radioButton, setRadioButton] = useState();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    setCarbonEstimate(calculateBusEstimate(distance, passengers, radioButton));
    setShowAddButton(true);
  }

  function handleAddTrip() {
    const carbon = Math.round(carbonEstimate);
    const tripItem = {
      date,
      distance,
      passengers,
      radioButton,
      carbon,
    };
    addBusItemToLocalStorage(tripItem);
  }

  function handleDistanceChange(event) {
    setDistance(event.target.value);
  }

  function handleDateChange(date) {
    const newDate = date.target.value;
    setDate(newDate);
  }
  function handlePassengerChange(event) {
    const { value } = event.target;
    if (value > 0) {
      setPassengers(value);
    } else setPassengers(0);
  }

  function handleBackClick() {
    history.push("/add-trip");
  }

  return (
    <div className="add-bus">
      <Header text="Add Bus Ride" headerClass="header" h1Class="h1-class" />

      <form className="add-bus-form" onSubmit={handleSubmit}>
        <div className="distance-date-container">
          <input
            className="add-trip-distanceinput"
            type="number"
            placeholder="Distance in km"
            value={distance}
            onChange={handleDistanceChange}
            required
          />
          <input
            type="date"
            className="add-trip-datepicker"
            value={date}
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={handleDateChange}
            required
          ></input>
        </div>
        <div className="passenger-radio-button-container">
          <input
            className="add-car-trip-distanceinput"
            type="number"
            placeholder="No. of Passengers"
            value={passengers}
            onChange={handlePassengerChange}
            required
          />
          <div className="radio-button-container">
            <label>
              <input
                type="radio"
                checked={1 === radioButton}
                onChange={(e) => {
                  setRadioButton(1);
                }}
                name="bus"
              />{" "}
              Long-distance Bus
            </label>
            <label>
              <input
                type="radio"
                checked={2 === radioButton}
                onChange={(e) => {
                  setRadioButton(2);
                }}
                name="bus"
              />{" "}
              Local Bus
            </label>
          </div>
        </div>
        <div className="calculate-button-container">
          <Button type="primary" text="Calculate CO2 emission"></Button>
        </div>
      </form>
      <div className="estimate-add-button-container">
        {carbonEstimate !== undefined ? (
          <p className="add-car-emission-paragraph">
            Emission in kg:{carbonEstimate.toFixed(2)}
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
      <div>
        <Button type="back" text="Back" onClick={handleBackClick} />
      </div>
    </div>
  );
}
