import "./Summary.css";
import "./Home.css";

import SummaryCard from "./SummaryCard";

export default function Summary() {
  return (
    <div>
      <header className="Header">
        <h1 className="h1-class">Total CO2 Emission</h1>
      </header>

      <div className="summary-content">
        <SummaryCard />
      </div>
    </div>
  );
}
