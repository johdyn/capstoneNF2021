export default function fetchFlightEstimate({ requestItem }) {
  const url = "https://www.carboninterface.com/api/v1/estimates";
  const tripData = {
    type: "flight",
    passengers: requestItem.passengers,
    legs: [
      {
        departure_airport: requestItem.departure,
        destination_airport: requestItem.destination,
      },
    ],
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
