import {
  getCarItemsFromLocalStorage,
  getFlightItemsFromLocalStorage,
} from "./tripStorage";

export function calculateFlightSum() {
  let sum = 0;
  const flights = JSON.parse(localStorage.getItem("flightItems") || []);
  flights.map((item) => {
    sum = sum + item.carbon;
    return sum;
  });
  return sum;
}

export function calculateCarSum() {
  let sum = 0;
  const cars = JSON.parse(localStorage.getItem("carItems") || []);
  cars.map((item) => {
    sum = sum + item.carbon;
    return sum;
  });
  return sum;
}
