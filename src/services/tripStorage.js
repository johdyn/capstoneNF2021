import generateID from "./generateID";

export function getCarItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("carItems")) || [];

  return items;
}

export function getFlightItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("flightItems")) || [];

  return items;
}

export function getTrainItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("trainItems")) || [];

  return items;
}

export function getBusItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("busItems")) || [];

  return items;
}

export function addCarItemToLocalStorage(item) {
  const items = getCarItemsFromLocalStorage();
  item.id = generateID();
  items.push(item);
  localStorage.setItem("carItems", JSON.stringify(items));
}

export function addFlightItemToLocalStorage(item) {
  const items = getFlightItemsFromLocalStorage();
  item.id = generateID();
  items.push(item);
  localStorage.setItem("flightItems", JSON.stringify(items));
}

export function addTrainItemToLocalStorage(item) {
  const items = getTrainItemsFromLocalStorage();
  item.id = generateID();
  items.push(item);
  localStorage.setItem("trainItems", JSON.stringify(items));
}

export function addBusItemToLocalStorage(item) {
  const items = getBusItemsFromLocalStorage();
  item.id = generateID();
  items.push(item);
  localStorage.setItem("busItems", JSON.stringify(items));
}

export function removeCarItemFromLocalStorage(itemID) {
  const items = getCarItemsFromLocalStorage();
  const newItems = items.filter((item) => {
    return item.id !== itemID;
  });
  localStorage.setItem("carItems", JSON.stringify(newItems));
}

export function removeFlightItemFromLocalStorage(itemID) {
  const items = getFlightItemsFromLocalStorage();
  const newItems = items.filter((item) => {
    return item.id !== itemID;
  });
  localStorage.setItem("flightItems", JSON.stringify(newItems));
}

export function removeTrainItemFromLocalStorage(itemID) {
  const items = getTrainItemsFromLocalStorage();
  const newItems = items.filter((item) => {
    return item.id !== itemID;
  });
  localStorage.setItem("trainItems", JSON.stringify(newItems));
}

export function removeBusItemFromLocalStorage(itemID) {
  const items = getBusItemsFromLocalStorage();
  const newItems = items.filter((item) => {
    return item.id !== itemID;
  });
  localStorage.setItem("busItems", JSON.stringify(newItems));
}
