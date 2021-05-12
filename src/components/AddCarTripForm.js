import "./AddCarTripForm.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const [carbonEstimate, setCarbonEstimate] = useState();
  const history = useHistory();
  const modelSet = new Set();

  useEffect(() => {
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
      setCarbonEstimate(estimate.data.attributes.carbon_kg);
    });
  }

  function handleAddTrip() {
    const carbon = Math.round(carbonEstimate);
    const tripItem = {
      date,
      distance,
      selectVehicleMake,
      selectVehicleModel,
      carbon,
    };
    addCarItemToLocalStorage(tripItem);
    history.push("/");
  }

  function handleDistanceChange(event) {
    setDistance(event.target.value);
  }

  function handleDateChange(date) {
    const newDate = date.target.value;
    setDate(newDate);
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
        required
      />
      <input
        type="date"
        className="add-flight-datepicker"
        value={date}
        pattern="\d{4}-\d{2}-\d{2}"
        onChange={handleDateChange}
        required
      ></input>

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
        <button className="add-car-calculate-button" type="submit">
          Calculate CO2 emission
        </button>
        <p className="add-car-emission-paragraph">
          Emission in kg:{carbonEstimate}
        </p>
        <button className="add-car-addtrip-button" onClick={handleAddTrip}>
          Add to My Trips
        </button>
      </div>
    </form>
  );
}
