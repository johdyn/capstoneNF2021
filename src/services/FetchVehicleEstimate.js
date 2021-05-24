export function fetchVehicleEstimate(requestItem) {
  const url = "https://www.carboninterface.com/api/v1/estimates";
  const tripData = {
    type: "vehicle",
    distance_unit: "km",
    distance_value: requestItem.distance,
    vehicle_model_id: requestItem.id,
  };

  const requestBody = JSON.stringify(tripData);
  const apiKey = "Bearer " + process.env.REACT_APP_CARBON_INTERFACE_API_KEY;
  return fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: requestBody,
  }).then((res) => res.json());
}

export function fetchVehicleMakes() {
  const apiKey = "Bearer " + process.env.REACT_APP_CARBON_INTERFACE_API_KEY;
  const url = "https://www.carboninterface.com/api/v1/vehicle_makes";

  return fetch(url, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  }).then((res) => res.json());
}

export function fetchVehicleModels(vehicle_make_id) {
  const apiKey = "Bearer " + process.env.REACT_APP_CARBON_INTERFACE_API_KEY;
  const url = `https://www.carboninterface.com/api/v1/vehicle_makes/${vehicle_make_id}/vehicle_models`;

  return fetch(url, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  }).then((res) => res.json());
}
