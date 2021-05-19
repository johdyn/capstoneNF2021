import {
  getCarItemsFromLocalStorage,
  getFlightItemsFromLocalStorage,
} from "../services/tripStorage";

export function calculateFlightSum() {
  let sum = 0;

  const flights = JSON.parse(localStorage.getItem("flightItems")) || [];
  console.log(flights);
  if (flights.length > 0) {
    flights.map((item) => {
      sum = sum + item.carbon;
      return sum;
    });
  } else {
    console.log(sum);
    return sum;
  }
  return sum;
}

export function calculateCarSum() {
  let sum = 0;
  const cars = JSON.parse(localStorage.getItem("carItems")) || [];
  cars.map((item) => {
    sum = sum + item.carbon;
    return sum;
  });
  return sum;
}
