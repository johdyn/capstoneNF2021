import "./DoughnutChart.css";
import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ flightSum, carSum }) {
  global.defaultFontColor = "white";
  return (
    <div>
      <Doughnut
        className="doughnut-chart"
        data={{
          labels: ["Flight", "Car"],
          color: ["#000000", "#000000"],
          datasets: [
            {
              label: "CO2 emission",
              data: [flightSum, carSum],
              backgroundColor: ["#aaacd1", "#2e3557"],
              borderColor: ["white", "white"],
            },
          ],
        }}
        height={200}
        width={300}
      />
    </div>
  );
}
