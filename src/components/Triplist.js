import TripItem from "./TripItem";
import { getItemsFromLocalStorage } from "./tripStorage";
import { removeItemFromLocalStorage } from "./tripStorage";
import { useState } from "react";

export default function Triplist() {
  const [tripItems, setTripItems] = useState(getItemsFromLocalStorage);
  const [carTripItems, setCarTripItems] = useState();
  const [flightTripItems, setFlightTripItems] = useState();

  console.log(tripItems);
  function handleRemoveItem(itemID) {
    removeItemFromLocalStorage(itemID);
    setTripItems(getItemsFromLocalStorage());
  }

  return (
    <div className="trip-container">
      {tripItems.map((item) => {
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
      })}
    </div>
  );
}
