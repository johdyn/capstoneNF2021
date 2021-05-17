import "./SummaryCard.css";
import DoughnutChart from "./DoughnutChart";
import { calculateFlightSum, calculateCarSum } from "./calculateCo2Summary";

export default function SummaryCard() {
  const flightSum = calculateFlightSum();
  const carSum = calculateCarSum();
  const totalSum = flightSum + carSum;
  return (
    <div className="summary-card">
      <select className="period-select-box">
        <option>This week</option>
        <option>This month</option>
        <option>This year</option>
      </select>
      <h3>Your Total CO2: {totalSum} kg</h3>
      <div>
        <DoughnutChart flightSum={flightSum} carSum={carSum} />
      </div>
    </div>
  );
}
