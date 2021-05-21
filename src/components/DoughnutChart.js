import "./DoughnutChart.css";
import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart({ flightSum, carSum, trainSum, busSum }) {
  global.defaultFontColor = "white";
  return (
    <div>
      <Doughnut
        className="doughnut-chart"
        data={{
          labels: ["Flight", "Car", "Train", "Bus"],
          color: ["#faffe4"],
          datasets: [
            {
              label: "CO2 emission",
              data: [flightSum, carSum, trainSum, busSum],
              backgroundColor: ["#aaacd1", "#2e3557", "#3ab09c", "#faffe4"],
              borderColor: ["transparent"],
            },
          ],
        }}
        options={{ plugins: { legend: { labels: { color: "whitesmoke" } } } }}
        height={200}
        width={300}
      />
    </div>
  );
}
