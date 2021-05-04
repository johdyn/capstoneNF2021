import TripItem from "./TripItem";
import { getItemsFromLocalStorage } from "./tripStorage";
import { removeItemFromLocalStorage } from "./tripStorage";
import { useState } from "react";

export default function Triplist() {
  const [tripItems, setTripItems] = useState(getItemsFromLocalStorage);
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
            destination={item.destination}
            departure={item.departure}
            onRemove={() => handleRemoveItem(item.id)}
          />
        );
      })}
    </div>
  );
}
