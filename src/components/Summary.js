import "./Summary.css";
import "./Home.css";
import Button from "./Button";
import Header from "./Header";

import SummaryCard from "./SummaryCard";

export default function Summary() {
  return (
    <div className="summary">
      <Header
        text="Total CO2 Emission"
        headerClass="header"
        h1Class="h1-class"
      />
      <div className="summary-content">
        <SummaryCard />

        <div className="compensate-button-wrapper">
          <Button type="tertiary" text="Compensate" />
        </div>
      </div>
    </div>
  );
}
