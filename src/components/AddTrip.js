import "./AddTrip.css";
import FilterButton from "./FilterButton";
import { useHistory } from "react-router-dom";
import Header from "./Header";

export default function AddTrip() {
  let history = useHistory();

  return (
    <div className="add-trip">
      <Header text="Add Trip" headerClass="header" h1Class="h1-class" />
      <div className="filter-button-container">
        <FilterButton
          text="Add Car Ride"
          onClick={(e) => {
            history.push("add-trip/add-car");
          }}
        />
        <FilterButton
          text="Add Flight"
          onClick={(e) => {
            history.push("add-trip/add-flight");
          }}
        />
        <FilterButton
          text="Add Train Ride"
          onClick={(e) => {
            history.push("add-trip/add-train");
          }}
        />
        <FilterButton
          text="Add Bus Ride"
          onClick={(e) => {
            history.push("add-trip/add-bus");
          }}
        />
      </div>
    </div>
  );
}
