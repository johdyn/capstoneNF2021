import "./AddCarTripForm.css";
import Select from "react-select";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addCarItemToLocalStorage } from "../services/tripStorage";
import Button from "./Button";
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
  const [selectVehicleModel, setSelectVehicleModel] = useState();
  const [displayVehicleModels, setDisplayVehicleModels] = useState([]);
  const [selectVehicleModelID, setSelectVehicleModelID] = useState();
  const [carbonEstimate, setCarbonEstimate] = useState();
  const [showAddButton, setShowAddButton] = useState(false);
  const history = useHistory();
  const modelSet = new Set();

  console.log(selectVehicleModel);
  console.log(selectVehicleModelID);
  console.log(vehicleModels);
  useEffect(() => {
    fetchVehicleMakes().then((makes) => {
      setVehicleMakes(makes);
      setSelectVehicleMake(makes[0]);
    });
  }, []);

  function renderVehicleMakes() {
    return vehicleMakes.map((item) => {
      return {
        value: item.data.attributes.name,
        label: item.data.attributes.name,
      };
    });
  }

  function renderVehicleModels() {
    return displayVehicleModels.map((item) => {
      return { value: item, label: item };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (selectVehicleModelID === undefined) {
      alert("Please choose a vehicle make and model");
    } else {
      const requestItem = {
        distance: distance,
        id: selectVehicleModelID,
      };

      fetchVehicleEstimate(requestItem).then((estimate) => {
        setCarbonEstimate(estimate.data.attributes.carbon_kg);
        setShowAddButton(true);
      });
    }
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
    console.log(tripItem);
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
    const { value } = event;
    const selectedMake = vehicleMakes.find((make) => {
      return make.data.attributes.name === value;
    });

    setSelectVehicleMake(selectedMake.data.attributes.name);
    const makeID = selectedMake.data.id;
    fetchVehicleModels(makeID).then((models) => {
      setVehicleModels(models);
      models.map((item) => {
        return modelSet.add(
          item.data.attributes.name + ", " + item.data.attributes.year
        );
      });
      const displayArray = Array.from(modelSet);
      displayArray.sort();
      setDisplayVehicleModels(displayArray);
      // setSelectVehicleModel(displayArray[0]);
      // console.log(selectVehicleModel);
    });
  }

  function handleVehicleModelChange(event) {
    const { value } = event;
    const commaIndex = value.indexOf(",");
    const selectedName = value.slice(0, commaIndex);
    const selectedYear = value.slice(commaIndex + 2, commaIndex + 6);
    console.log(selectedName);
    console.log(selectedYear);
    console.log(selectedYear.length);
    const selectedModel = vehicleModels.find((model) => {
      return (
        model.data.attributes.name === selectedName &&
        model.data.attributes.year == selectedYear
      );
    });
    console.log(selectedModel);
    setSelectVehicleModel(
      `${selectedModel.data.attributes.name}, ${selectedModel.data.attributes.year}`
    );
    setSelectVehicleModelID(selectedModel.data.id);
  }

  return (
    <div>
      <form className="add-car-trip-form" onSubmit={handleSubmit}>
        <div className="distance-date-container">
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
            className="add-car-trip-datepicker"
            value={date}
            pattern="\d{4}-\d{2}-\d{2}"
            onChange={handleDateChange}
            required
          ></input>
        </div>
        <div className="select-box-container">
          <Select
            className="select-class"
            placeholder="Vehicle Makes"
            options={renderVehicleMakes()}
            onChange={handleVehicleMakeChange}
            required
          />
          <Select
            className="select-class"
            placeholder="Vehicle Models"
            options={renderVehicleModels()}
            onChange={handleVehicleModelChange}
          />
        </div>
        <div>
          <Button type="primary" text="Calculate CO2 emission"></Button>
        </div>
      </form>
      <div className="estimate-add-button-container">
        {carbonEstimate !== undefined ? (
          <p className="add-car-emission-paragraph">
            Emission in kg:{carbonEstimate}
          </p>
        ) : null}
        {showAddButton ? (
          <Button
            type="secondary"
            text="Add to My Trips"
            onClick={handleAddTrip}
          ></Button>
        ) : null}
      </div>
    </div>
  );
}
