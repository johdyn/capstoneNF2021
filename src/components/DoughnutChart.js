import React from "react";
import { Doughnut } from "react-chartjs-2";

export default function DoughnutChart() {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Flights", "Car"],
          datasets: [
            {
              label: "CO2 emission",
              data: [12, 19],
            },
          ],
        }}
        height={400}
        width={600}
      />
    </div>
  );
}
