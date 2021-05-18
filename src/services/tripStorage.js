import generateID from "./generateID";

export function initializeLocalStorage() {
  const carItems = getCarItemsFromLocalStorage();
  const flightItems = getFlightItemsFromLocalStorage();
  if (carItems.length < 1) {
    localStorage.setItem("carItems", JSON.stringify([]));
  }
  if (flightItems.length < 1) {
    localStorage.setItem("flightItems", JSON.stringify([]));
  }
}

export function getCarItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("carItems")) || [];

  return items;
}

export function getFlightItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("flightItems")) || [];

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
