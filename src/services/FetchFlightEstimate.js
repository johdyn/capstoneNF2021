export default function fetchFlightEstimate(requestItem) {
  const url = "https://www.carboninterface.com/api/v1/estimates";
  const tripData = {
    type: "flight",
    passengers: requestItem.passengers,
    legs: [
      {
        departure_airport: requestItem.airportCodeDeparture,
        destination_airport: requestItem.airportCodeDestination,
      },
    ],
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
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error();
    }
  });
}
