import "./AddFlightForm.css";
import { useState, useEffect } from "react";
import { addFlightItemToLocalStorage } from "../services/tripStorage";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
import fetchFlightEstimate from "../services/FetchFlightEstimate";
import SelectInput from "./SelectInput";
import airportData from "../services/airports-filtered.json";

export default function AddFlightForm() {
  const [passengers, setPassengers] = useState();
  const [date, setDate] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [estimateObject, setEstimateObject] = useState();
  const [showAddButton, setShowAddButton] = useState(false);
  const [airportOptions, setAirportOptions] = useState([]);
  const history = useHistory();
  const airports = airportData;

  useEffect(() => {
    setAirportOptions(
      airports.map((airport) => {
        let placeholder = `${airport.iata} (${airport.name})`;
        return { value: placeholder, label: placeholder };
      })
    );
  }, [airports]);

  function handleSubmit(event) {
    event.preventDefault();

    if (departure === "" || destination === "") {
      alert("Please choose departure and destination airports");
    } else {
      const airportCodeDeparture = departure.slice(0, 3);
      const airportCodeDestination = destination.slice(0, 3);

      const requestItem = {
        passengers,
        date,
        airportCodeDeparture,
        airportCodeDestination,
      };
      fetchFlightEstimate(requestItem)
        .then((estimate) => {
          setEstimateObject(estimate);
          setShowAddButton(true);
        })
        .catch((error) => {
          alert(
            "One of the airport codes is not valid. Please try another one!"
          );
        });
    }
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
    setShowAddButton(false);
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

  function handleBackClick() {
    history.push("/add-trip");
  }

  return (
    <div className="add-flight">
      <Header text="Add Flight" />
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
          <SelectInput
            className="select-input"
            placeholder="Departure airport"
            options={airportOptions}
            onChange={handleDepartureChange}
          />
          <SelectInput
            className="select-input"
            placeholder="Destination airport"
            options={airportOptions}
            onChange={handleDestinationChange}
          />
        </div>
        <div>
          <Button type="primary" text="Calculate CO2 emission"></Button>
        </div>
      </form>
      <div className="estimate-add-button-container">
        {showAddButton ? (
          <div>
            <p className="add-flight-emission-paragraph">
              Emission in kg:
              {estimateObject && estimateObject.data.attributes.carbon_kg}
            </p>{" "}
            <Button
              type="secondary"
              text="Add to My Trips"
              onClick={handleAddTrip}
            ></Button>
          </div>
        ) : null}
      </div>
      <div>
        <Button type="back" text="Back" onClick={handleBackClick} />
      </div>
    </div>
  );
}
