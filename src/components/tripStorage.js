import generateID from "../services/generateID";

export function getItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  return items;
}

export function getCarItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("carItems")) || [];

  return items;
}

export function addItemToLocalStorage(item) {
  const items = getItemsFromLocalStorage();
  item.id = generateID();
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

export function addCarItemToLocalStorage(item) {
  const items = getCarItemsFromLocalStorage();
  item.id = generateID();
  items.push(item);
  localStorage.setItem("carItems", JSON.stringify(items));
}

export function removeItemFromLocalStorage(itemID) {
  const items = getItemsFromLocalStorage();
  console.log(itemID);
  const newItems = items.filter((item) => {
    return item.id !== itemID;
  });
  localStorage.setItem("items", JSON.stringify(newItems));
}
