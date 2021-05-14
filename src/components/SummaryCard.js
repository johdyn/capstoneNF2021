import "./SummaryCard.css";
import DoughnutChart from "./DoughnutChart";

export default function SummaryCard() {
  return (
    <div className="summary-card">
      <h3>Total spending CO2</h3>
      <select className="period-select-box">
        <option>This week</option>
        <option>This month</option>
        <option>This year</option>
      </select>
      <div>
        <DoughnutChart />
      </div>{" "}
    </div>
  );
}
