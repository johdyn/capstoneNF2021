import "./SummaryCard.css";
import DoughnutChart from "./DoughnutChart";
import { calculateTransportSum } from "../services/calculateCo2Summary";

export default function SummaryCard() {
  const flightSum = calculateTransportSum("flightItems");
  const carSum = calculateTransportSum("carItems");
  const trainSum = calculateTransportSum("trainItems");
  const busSum = calculateTransportSum("busItems");
  const totalSum = flightSum + carSum + trainSum + busSum;

  return (
    <div className="summary-card">
      <input type="date" />
      <select className="period-select-box">
        <option>Choose a month or year</option>
        {/* <option>This month</option>
        <option>This year</option> */}
      </select>
      <h3>Your Total CO2: {totalSum} kg</h3>
      <div>
        <DoughnutChart
          flightSum={flightSum}
          carSum={carSum}
          trainSum={trainSum}
          busSum={busSum}
        />
      </div>
      <p>Sustainable Annual Budget: 1.500 kg</p>
    </div>
  );
}
