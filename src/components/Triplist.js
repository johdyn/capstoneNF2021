import TripItem from "./TripItem";
import { getItemsFromLocalStorage } from "./tripStorage";
import { removeItemFromLocalStorage } from "./tripStorage";
import { useState } from "react";

export default function Triplist() {
  const [tripItems, setTripItems] = useState(getItemsFromLocalStorage);
  const [carTripItems, setCarTripItems] = useState();
  const [flightTripItems, setFlightTripItems] = useState();
  const [filter, setFilter] = useState("flights");
  console.log(tripItems);
  function handleRemoveItem(itemID) {
    removeItemFromLocalStorage(itemID);
    setTripItems(getItemsFromLocalStorage());
  }

  return (
    <div className="trip-container">
      <button onClick={() => setFilter("cars")}>Cars</button>
      <button onClick={() => setFilter("flights")}>Flight</button>
      {filter === "flights"
        ? tripItems
            .sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map((item) => {
              return (
                <TripItem
                  id={item.id}
                  date={item.date}
                  passengers={item.passengers}
                  departure={item.departure}
                  destination={item.destination}
                  distance={item.distance}
                  carbon={item.carbon}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              );
            })
        : ""}
    </div>
  );
}
