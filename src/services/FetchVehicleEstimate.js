export function fetchVehicleEstimate(requestItem) {
  const url = "https://www.carboninterface.com/api/v1/estimates";
  const tripData = {
    type: "vehicle",
    distance_unit: "km",
    distance_value: requestItem.distance,
    vehicle_model_id: requestItem.id,
  };

  const requestBody = JSON.stringify(tripData);
  return fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer n1wyCAIIbimLWWB6X1yfQ",
    },
    body: requestBody,
  }).then((res) => res.json());
}

export function fetchVehicleMakes() {
  const url = "https://www.carboninterface.com/api/v1/vehicle_makes";

  return fetch(url, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer n1wyCAIIbimLWWB6X1yfQ",
    },
  }).then((res) => res.json());
}

export function fetchVehicleModels(vehicle_make_id) {
  const url = `https://www.carboninterface.com/api/v1/vehicle_makes/${vehicle_make_id}/vehicle_models`;

  return fetch(url, {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer n1wyCAIIbimLWWB6X1yfQ",
    },
  }).then((res) => res.json());
}
