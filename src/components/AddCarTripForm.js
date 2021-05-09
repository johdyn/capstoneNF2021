import "./AddCarTripForm.css";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addCarItemToLocalStorage } from "./tripStorage";
import {
  fetchVehicleEstimate,
  fetchVehicleMakes,
  fetchVehicleModels,
} from "../services/FetchVehicleEstimate";

export default function AddCarTripForm() {
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState(new Date());
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [selectVehicleMake, setSelectVehicleMake] = useState();
  const [selectVehicleID, setSelectVehicleID] = useState();
  const [selectVehicleModel, setSelectVehicleModel] = useState();
  const [selectVehicleModelID, setSelectVehicleModelID] = useState();
  const [estimate, setEstimate] = useState();
  const [displayEstimate, setDisplayEstimate] = useState();
  console.log(vehicleMakes);
  console.log(selectVehicleMake);
  console.log(selectVehicleID);
  console.log(estimate);

  useEffect(() => {
    console.log("first render");
    fetchVehicleMakes().then((makes) => {
      setVehicleMakes(makes);
    });
  }, []);

  function renderVehicleMakeOptions() {
    return vehicleMakes.map((item) => {
      return <option>{item.data.attributes.name}</option>;
    });
  }

  function renderVehicleModelOptions() {
    return vehicleModels.map((item) => {
      return (
        <option>
          {item.data.attributes.name}, {item.data.attributes.year}
        </option>
      );
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const requestItem = {
      distance: distance,
      id: selectVehicleModelID,
    };

    fetchVehicleEstimate(requestItem).then((estimate) => {
      setDisplayEstimate(estimate.data.attributes.carbon_kg);
      setEstimate(estimate);
    });
  }

  function handleAddTrip() {
    const tripItem = {
      date,
      distance,
      displayEstimate,
    };

    addCarItemToLocalStorage(tripItem);
  }

  function handleDistanceChange(event) {
    setDistance(event.target.value);
  }

  function handleDateChange(date) {
    setDate(date);
  }

  function handleVehicleMakeChange(event) {
    console.log(vehicleMakes);
    const selectedVehicle = vehicleMakes.find((make) => {
      return make.data.attributes.name === event.target.value;
    });

    console.log(selectedVehicle);
    setSelectVehicleMake(selectedVehicle.data.attributes.name);
    const vehicleID = selectedVehicle.data.id;
    console.log(vehicleID);
    fetchVehicleModels(vehicleID).then((models) => {
      setVehicleModels(models);
    });
  }

  function handleVehicleModelChange(event) {
    console.log(event.target.value);
    setSelectVehicleModel(event.target.value);
    const value = event.target.value;
    const commaIndex = value.indexOf(",");
    console.log(commaIndex);
    const selectedName = value.slice(0, commaIndex);
    console.log(selectedName);
    // const modelname = event.target.value.
    console.log(vehicleModels);
    const selectedModel = vehicleModels.find((model) => {
      return model.data.attributes.name === selectedName;
    });
    console.log(selectedModel);

    setSelectVehicleModelID(selectedModel.data.id);
  }

  return (
    <form className="add-car-trip-form" onSubmit={handleSubmit}>
      <input
        className="add-car-trip-distanceinput"
        type="text"
        placeholder="Distance in km"
        value={distance}
        onChange={handleDistanceChange}
      />
      <DatePicker
        className="add-car-trip-datepicker"
        selected={date}
        onChange={handleDateChange}
      ></DatePicker>
      <select
        value={selectVehicleMake}
        onChange={handleVehicleMakeChange}
        className="add-car-trip-select"
      >
        {renderVehicleMakeOptions()}
      </select>
      <select
        value={selectVehicleModel}
        onChange={handleVehicleModelChange}
        className="add-car-trip-select"
      >
        {renderVehicleModelOptions()}
      </select>
      <div>
        <button className="calculate-co2-button" type="submit">
          Calculate CO2 emission
        </button>
        <p className="add-car-emission-paragraph">
          Emission in kg:{displayEstimate}
        </p>
        <button className="add-car-addtrip-button" onClick={handleAddTrip}>
          Add to My Trips
        </button>
      </div>
    </form>
  );
}
