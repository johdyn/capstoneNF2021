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
  const [vehicleModels, setVehicleModels] = useState();
  const [selectVehicleMake, setSelectVehicleMake] = useState();
  const [selectVehicleModel, setSelectVehicleModel] = useState();
  const [displayVehicleModels, setDisplayVehicleModels] = useState([]);
  const [selectVehicleModelID, setSelectVehicleModelID] = useState();
  const [estimate, setEstimate] = useState();
  const modelSet = new Set();

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
    return displayVehicleModels.map((item) => {
      return <option>{item}</option>;
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const requestItem = {
      distance: distance,
      id: selectVehicleModelID,
    };

    fetchVehicleEstimate(requestItem).then((estimate) => {
      setEstimate(estimate.data.attributes.carbon_kg);
    });
  }

  function handleAddTrip() {
    const carbon = Math.round(estimate);
    const tripItem = {
      date,
      distance,
      selectVehicleMake,
      selectVehicleModel,
      carbon,
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
    const selectedVehicle = vehicleMakes.find((make) => {
      return make.data.attributes.name === event.target.value;
    });

    setSelectVehicleMake(selectedVehicle.data.attributes.name);
    const vehicleID = selectedVehicle.data.id;
    fetchVehicleModels(vehicleID).then((models) => {
      setVehicleModels(models);
      models.map((item) => {
        return modelSet.add(
          item.data.attributes.name + ", " + item.data.attributes.year
        );
      });
      const displayArray = Array.from(modelSet);
      displayArray.sort();
      setDisplayVehicleModels(displayArray);
    });
  }

  function handleVehicleModelChange(event) {
    setSelectVehicleModel(event.target.value);
    const value = event.target.value;
    const commaIndex = value.indexOf(",");
    const selectedName = value.slice(0, commaIndex);
    const selectedModel = vehicleModels.find((model) => {
      return model.data.attributes.name === selectedName;
    });

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
        dateFormat="dd/MM/yyyy"
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
        <p className="add-car-emission-paragraph">Emission in kg:{estimate}</p>
        <button className="add-car-addtrip-button" onClick={handleAddTrip}>
          Add to My Trips
        </button>
      </div>
    </form>
  );
}
