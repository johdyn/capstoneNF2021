import "./AddTrip.css";
import "./FilterButton.css";
import FilterButton from "./FilterButton";
import { useHistory } from "react-router-dom";
import Header from "./Header";

export default function AddTrip() {
  let history = useHistory();

  return (
    <div className="add-trip">
      <div className="green-layer"></div>
      <Header text="Add Trip" />
      <div className="filter-button-container">
        <FilterButton
          text="Add Flight"
          onClick={(e) => {
            history.push("add-trip/add-flight");
          }}
        />
        <FilterButton
          text="Add Car Ride"
          onClick={(e) => {
            history.push("add-trip/add-car");
          }}
        />

        <FilterButton
          text="Add Train Journey"
          onClick={(e) => {
            history.push("add-trip/add-train");
          }}
        />
        <FilterButton
          text="Add Bus Trip"
          onClick={(e) => {
            history.push("add-trip/add-bus");
          }}
        />
      </div>
    </div>
  );
}
