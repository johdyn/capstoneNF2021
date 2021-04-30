export function getItemsFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("items")) || [];

  return items;
}

export function addItemToLocalStorage(item) {
  const items = getItemsFromLocalStorage();

  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}
