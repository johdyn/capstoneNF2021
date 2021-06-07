import "./AddTrainForm.css";
import Header from "./Header";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addTrainItemToLocalStorage } from "../services/tripStorage";
import Button from "./Button";
import { calculateTrainEstimate } from "../services/calculateTrainEstimate";

export default function AddTrainForm() {
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState();
  const [carbonEstimate, setCarbonEstimate] = useState();
  const [showAddButton, setShowAddButton] = useState(false);
  const [radioButton, setRadioButton] = useState(1);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    setCarbonEstimate(
      calculateTrainEstimate(distance, passengers, radioButton)
    );
    setShowAddButton(true);
  }

  function handleAddTrip() {
    const carbon = Math.round(carbonEstimate);
    const tripItem = {
      distance,
      date,
      passengers,
      radioButton,
      carbon,
    };

    addTrainItemToLocalStorage(tripItem);
    setShowAddButton(false);
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
    <div className="add-train">
      <Header text="Add Train Journey" />

      <form className="add-train-form" onSubmit={handleSubmit}>
        <div className="distance-date-container">
          <input
            type="date"
            className="add-trip-datepicker"
            value={date}
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={handleDateChange}
            required
          />
          <input
            className="add-trip-distanceinput"
            type="number"
            placeholder="Distance in km"
            value={distance}
            onChange={handleDistanceChange}
            required
          />
        </div>
        <div className="passenger-radio-button-container">
          <input
            className="train-passenger-input"
            type="number"
            placeholder="No. of Passengers"
            value={passengers}
            onChange={handlePassengerChange}
            required
          />
          <div className="radio-button-container">
            <label className="radio-text">
              <input
                type="radio"
                checked={1 === radioButton}
                onChange={(e) => {
                  setRadioButton(1);
                }}
                name="rail"
              />{" "}
              Local Rail
            </label>
            <label className="radio-text">
              <input
                type="radio"
                checked={2 === radioButton}
                onChange={(e) => {
                  setRadioButton(2);
                }}
                name="rail"
              />{" "}
              Intercity Rail
            </label>
          </div>
        </div>
        <div className="calculate-button-container">
          <Button variety="primary" text="Calculate CO2 emission"></Button>
        </div>
        <div className="estimate-add-button-container">
          {showAddButton ? (
            <div>
              <p className="add-car-emission-paragraph">
                CO2 Estimate: {carbonEstimate.toFixed(1)} kg
              </p>
              <Button
                variety="secondary"
                text="Save"
                onClick={handleAddTrip}
              ></Button>
            </div>
          ) : null}
        </div>
        <div>
          <Button variety="back" text="Back" onClick={handleBackClick} />
        </div>
      </form>
    </div>
  );
}
