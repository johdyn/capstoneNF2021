import AddCarTripForm from "./AddCarTripForm";
import AddFlightForm from "./AddFlightForm";
import "./AddCar.css";
import FilterButton from "./FilterButton";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function AddCar() {
  const [filter, setFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

  console.log(filter);
  console.log(showForm);
  // let history = useHistory();

  function handleCarFilter() {
    setFilter("car");
    setShowForm(true);
  }
  function handleFlightFilter() {
    setFilter("flight");
    setShowForm(true);
  }
  if (!showForm) {
    return (
      <div className="add-trip">
        <header className="Header">
          <h1 className="add-car-header">Add Trip</h1>
        </header>
        <div className="filter-button-container">
          <FilterButton text="Add car trip" onClick={handleCarFilter} />
          <FilterButton text="Add flight" onClick={handleFlightFilter} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="add-trip">
        <header className="Header">
          <h1 className="add-car-header">Add Car Ride</h1>
        </header>
        <div className="filter-button-container">
          <FilterButton text="Add car trip" onClick={handleCarFilter} />
          <FilterButton text="Add flight" onClick={handleFlightFilter} />
        </div>
        <div>
          {filter === "car" ? (
            <AddCarTripForm />
          ) : (
            <div>
              <AddFlightForm />
            </div>
          )}
        </div>
      </div>
    );
  }
}
