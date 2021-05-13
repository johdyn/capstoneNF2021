import FlightTripItem from "./FlightTripItem";
import CarTripItem from "./CarTripItem";

import "./Triplist.css";
import {
  getCarItemsFromLocalStorage,
  getFlightItemsFromLocalStorage,
  removeFlightItemFromLocalStorage,
  removeCarItemFromLocalStorage,
} from "./tripStorage";

import { useState } from "react";
import FilterButton from "./FilterButton";

export default function Triplist() {
  const [carTripItems, setCarTripItems] = useState(getCarItemsFromLocalStorage);
  const [flightTripItems, setFlightTripItems] = useState(
    getFlightItemsFromLocalStorage
  );
  const [filter, setFilter] = useState("flights");

  function handleRemoveFlightItem(itemID) {
    removeFlightItemFromLocalStorage(itemID);
    setFlightTripItems(getFlightItemsFromLocalStorage());
  }

  function handleRemoveCarItem(itemID) {
    removeCarItemFromLocalStorage(itemID);
    setCarTripItems(getCarItemsFromLocalStorage());
  }

  return (
    <div className="trip-container">
      <div className="button-container">
        <FilterButton text="Car Trips" onClick={() => setFilter("cars")} />
        <FilterButton text="Flights" onClick={() => setFilter("flights")} />
      </div>
      {filter === "flights"
        ? flightTripItems
            .sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map((item) => {
              return (
                <FlightTripItem
                  id={item.id}
                  date={item.date}
                  passengers={item.passengers}
                  departure={item.departure}
                  destination={item.destination}
                  distance={item.distance}
                  carbon={item.carbon}
                  onRemove={() => handleRemoveFlightItem(item.id)}
                />
              );
            })
        : carTripItems
            .sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map((item) => {
              return (
                <CarTripItem
                  id={item.id}
                  date={item.date}
                  distance={item.distance}
                  vehicleMake={item.selectVehicleMake}
                  vehicleModel={item.selectVehicleModel}
                  estimate={item.carbon}
                  onRemove={() => handleRemoveCarItem(item.id)}
                />
              );
            })}
    </div>
  );
}
