import "./SummaryCard.css";
import DoughnutChart from "./DoughnutChart";
import { calculateSum } from "../services/calculateSum";
import { useState, useEffect } from "react";
export default function SummaryCard() {
  const [selectedPeriod, setSelectedPeriod] = useState();
  const [flightSum, setFlightSum] = useState();
  const [carSum, setCarSum] = useState();
  const [trainSum, setTrainSum] = useState();
  const [busSum, setBusSum] = useState();
  const [totalSum, setTotalSum] = useState();

  const flightPercentage = (flightSum / totalSum) * 100;
  console.log(flightPercentage);

  useEffect(() => {
    const totalSumObject = calculateSum("Total");

    setTotalSum(
      totalSumObject.flightSum +
        totalSumObject.carSum +
        totalSumObject.trainSum +
        totalSumObject.busSum
    );
    setFlightSum(totalSumObject.flightSum);
    setCarSum(totalSumObject.carSum);
    setTrainSum(totalSumObject.trainSum);
    setBusSum(totalSumObject.busSum);
  }, []);

  function handlePeriodChange(event) {
    const value = event.target.value;
    setSelectedPeriod(value);
    const totalSumObject = calculateSum(value);
    setTotalSum(
      totalSumObject.flightSum +
        totalSumObject.carSum +
        totalSumObject.trainSum +
        totalSumObject.busSum
    );
    setFlightSum(totalSumObject.flightSum);
    setCarSum(totalSumObject.carSum);
    setTrainSum(totalSumObject.trainSum);
    setBusSum(totalSumObject.busSum);
  }
  return (
    <div className="summary-card">
      <select
        value={selectedPeriod}
        className="period-select-box"
        onChange={handlePeriodChange}
      >
        <option>Total</option>
        <option>Last year</option>
        <option>Last month</option>
      </select>
      <h3>CO2 emissions: {totalSum} kg</h3>
      <div>
        <DoughnutChart
          flightSum={flightSum}
          carSum={carSum}
          trainSum={trainSum}
          busSum={busSum}
        />
      </div>
      {/* <p>Sustainable Annual Budget: 1.500 kg</p> */}
    </div>
  );
}
