import "./Summary.css";
import "./Home.css";
import Button from "./Button";
import Header from "./Header";
import SummaryCard from "./SummaryCard";
export default function Summary() {
  return (
    <div className="summary">
      <div className="green-layer"></div>
      <Header text="CO2 Emission" />
      <div className="summary-content">
        <SummaryCard />
        <div className="compensate-button-wrapper">
          <Button
            type="tertiary"
            text="Compensate"
            onClick={() => {
              window.open("https://www.atmosfair.de/en/offset/fix/", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
}
