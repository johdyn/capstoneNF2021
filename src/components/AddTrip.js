import AddCarTripForm from "./AddCarTripForm";
import AddFlightForm from "./AddFlightForm";
import "./AddTrip.css";
import FilterButton from "./FilterButton";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

export default function AddTrip() {
  const [filter, setFilter] = useState("");
  const [showForm, setShowForm] = useState(false);

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
        <Header text="Add Trip" headerClass="header" h1Class="h1-class" />
        <div className="filter-button-container">
          <FilterButton text="Add Car Trip" onClick={handleCarFilter} />
          <FilterButton text="Add Flight" onClick={handleFlightFilter} />
        </div>
      </div>
    );
  } else if (showForm === true && filter === "car") {
    return (
      <div className="add-trip">
        <Header text="Add Car Ride" headerClass="header" h1Class="h1-class" />
        <div className="filter-button-container">
          <FilterButton text="Add Car Trip" onClick={handleCarFilter} />
          <FilterButton text="Add Flight" onClick={handleFlightFilter} />
        </div>
        <AddCarTripForm />
      </div>
    );
  } else if (showForm === true && filter === "flight") {
    return (
      <div className="add-trip">
        <Header text="Add Flight" headerClass="header" h1Class="h1-class" />
        <div className="filter-button-container">
          <FilterButton text="Add Car Trip" onClick={handleCarFilter} />
          <FilterButton text="Add Flight" onClick={handleFlightFilter} />
        </div>
        <AddFlightForm />
      </div>
    );
  }
}
