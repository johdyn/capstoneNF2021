export function calculateTransportSum(transportTypeItems) {
  let sum = 0;

  const selectedType =
    JSON.parse(localStorage.getItem(transportTypeItems)) || [];

  if (selectedType.length > 0) {
    selectedType.map((item) => {
      sum = sum + item.carbon;
      return sum;
    });
  } else {
    console.log(sum);
    return sum;
  }
  return sum;
}
