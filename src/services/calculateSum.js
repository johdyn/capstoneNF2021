export function calculateSum(period) {
  let flightSum;
  let carSum;
  let trainSum;
  let busSum;

  if (period === "Total") {
    flightSum = calculateTotalSum("flightItems");
    carSum = calculateTotalSum("carItems");
    trainSum = calculateTotalSum("trainItems");
    busSum = calculateTotalSum("busItems");
  } else if (period === "Last year") {
    flightSum = calculateYearSum("flightItems");
    carSum = calculateYearSum("carItems");
    trainSum = calculateYearSum("trainItems");
    busSum = calculateYearSum("busItems");
  } else if (period === "Last month") {
    flightSum = calculateMonthSum("flightItems");
    carSum = calculateMonthSum("carItems");
    trainSum = calculateMonthSum("trainItems");
    busSum = calculateMonthSum("busItems");
  }
  const totalSum = {
    flightSum,
    carSum,
    trainSum,
    busSum,
  };

  return totalSum;
}

export function calculateTotalSum(transportType) {
  let sum = 0;
  const selectedType = JSON.parse(localStorage.getItem(transportType)) || [];

  if (selectedType.length > 0) {
    selectedType.map((item) => {
      sum = sum + item.carbon;
      return sum;
    });
  } else {
    return sum;
  }
  return sum;
}
export function calculateYearSum(transportType) {
  let sum = 0;
  const newDate = new Date();
  let year = newDate.getFullYear();
  newDate.setFullYear(year - 1);
  let newDateObject = Date.parse(newDate);
  const selectedType = JSON.parse(localStorage.getItem(transportType)) || [];
  for (let i = 0; i < selectedType.length; i++) {
    let comparisonDate = Date.parse(selectedType[i].date);
    if (newDateObject < comparisonDate) {
      sum = sum + selectedType[i].carbon;
    }
  }
  return sum;
}

export function calculateMonthSum(transportType) {
  let sum = 0;
  const newDate = new Date();
  let month = newDate.getMonth();
  newDate.setMonth(month - 1);
  let newDateObject = Date.parse(newDate);
  const selectedType = JSON.parse(localStorage.getItem(transportType)) || [];
  for (let i = 0; i < selectedType.length; i++) {
    let comparisonDate = Date.parse(selectedType[i].date);
    if (newDateObject < comparisonDate) {
      sum = sum + selectedType[i].carbon;
    }
  }
  return sum;
}
