import "./Summary.css";
import "./Home.css";
import Button from "./Button";
import Header from "./Header";

import SummaryCard from "./SummaryCard";

export default function Summary() {
  return (
    <div>
      <Header
        text="Total CO2 Emission"
        headerClass="header"
        h1Class="h1-class"
      />
      <header className="summary-header">
        <h1 className="h1-class">Total CO2 Emission</h1>
      </header>
      <div className="summary-content">
        <SummaryCard />
      </div>
      <Button type="tertiary" text="Compensate" />
    </div>
  );
}
