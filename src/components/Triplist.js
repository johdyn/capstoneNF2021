import FlightTripItem from "./FlightTripItem";
import CarTripItem from "./CarTripItem";
import TrainTripItem from "./TrainTripItem";
import BusTripItem from "./BusTripItem";
import EmptyTripList from "./EmptyTripList";
import "./Triplist.css";
import {
  getCarItemsFromLocalStorage,
  getFlightItemsFromLocalStorage,
  getTrainItemsFromLocalStorage,
  getBusItemsFromLocalStorage,
  removeFlightItemFromLocalStorage,
  removeCarItemFromLocalStorage,
  removeTrainItemFromLocalStorage,
  removeBusItemFromLocalStorage,
} from "../services/tripStorage";
import { useState } from "react";
import IconButton from "./IconButton";

export default function Triplist() {
  const [carTripItems, setCarTripItems] = useState(getCarItemsFromLocalStorage);
  const [flightTripItems, setFlightTripItems] = useState(
    getFlightItemsFromLocalStorage
  );
  const [trainTripItems, setTrainTripItems] = useState(
    getTrainItemsFromLocalStorage
  );
  const [busTripItems, setBusTripItems] = useState(getBusItemsFromLocalStorage);

  const [filter, setFilter] = useState("flight");

  function handleRemoveFlightItem(itemID) {
    removeFlightItemFromLocalStorage(itemID);
    setFlightTripItems(getFlightItemsFromLocalStorage());
  }

  function handleRemoveCarItem(itemID) {
    removeCarItemFromLocalStorage(itemID);
    setCarTripItems(getCarItemsFromLocalStorage());
  }

  function handleRemoveTrainItem(itemID) {
    removeTrainItemFromLocalStorage(itemID);
    setTrainTripItems(getTrainItemsFromLocalStorage());
  }

  function handleRemoveBusItem(itemID) {
    removeBusItemFromLocalStorage(itemID);
    setBusTripItems(getBusItemsFromLocalStorage());
  }

  function renderFlightTripItems() {
    if (flightTripItems.length === 0) {
      return (
        <EmptyTripList
          text="Add your first flight!"
          path="/add-trip/add-flight"
        />
      );
    }
    return flightTripItems
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
      });
  }
  function rendercarTripItems() {
    if (carTripItems.length === 0) {
      return (
        <EmptyTripList
          text="Add your first car ride!"
          path="/add-trip/add-car"
        />
      );
    }
    return carTripItems
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
      });
  }

  function renderTrainTripItems() {
    if (trainTripItems.length === 0) {
      return (
        <EmptyTripList
          text="Add your first train ride!"
          path="/add-trip/add-train"
        />
      );
    }
    return trainTripItems
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      .map((item) => {
        return (
          <TrainTripItem
            id={item.id}
            date={item.date}
            passengers={item.passengers}
            radioButton={item.radioButton}
            distance={item.distance}
            carbon={item.carbon}
            onRemove={() => handleRemoveTrainItem(item.id)}
          />
        );
      });
  }

  function renderBusTripItems() {
    if (busTripItems.length === 0) {
      return (
        <EmptyTripList
          text="Add your first bus ride!"
          path="/add-trip/add-bus"
        />
      );
    }
    return busTripItems
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      .map((item) => {
        return (
          <BusTripItem
            id={item.id}
            date={item.date}
            passengers={item.passengers}
            radioButton={item.radioButton}
            distance={item.distance}
            carbon={item.carbon}
            onRemove={() => handleRemoveBusItem(item.id)}
          />
        );
      });
  }

  return (
    <div className="trip-container">
      <div className="button-container">
        <IconButton type="plane" onClick={() => setFilter("flight")} />
        <IconButton type="car" onClick={() => setFilter("car")} />
        <IconButton type="train" onClick={() => setFilter("train")} />
        <IconButton type="bus" onClick={() => setFilter("bus")} />
      </div>
      <div className="item-container">
        {filter === "flight"
          ? renderFlightTripItems()
          : filter === "car"
          ? rendercarTripItems()
          : filter === "train"
          ? renderTrainTripItems()
          : renderBusTripItems()}
      </div>
    </div>
  );
}
