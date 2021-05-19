import "./AddTrip.css";
import FilterButton from "./FilterButton";
import { useHistory } from "react-router-dom";
import Header from "./Header";

export default function AddTrip() {
  let history = useHistory();

  function handleCarFilter() {
    history.push("add-trip/add-car");
  }
  function handleFlightFilter() {
    history.push("add-trip/add-flight");
  }

  function handleTrainFilter() {
    history.push("add-trip/add-train");
  }

  return (
    <div className="add-trip">
      <Header text="Add Trip" headerClass="header" h1Class="h1-class" />
      <div className="filter-button-container">
        <FilterButton text="Add Car Trip" onClick={handleCarFilter} />
        <FilterButton text="Add Flight" onClick={handleFlightFilter} />
        <FilterButton text="Add Train Ride" onClick={handleTrainFilter} />
      </div>
    </div>
  );
}
