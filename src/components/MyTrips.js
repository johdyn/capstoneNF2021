import "./MyTrips.css";
import Triplist from "./Triplist";
import Header from "./Header";

export default function MyTrips() {
  return (
    <div>
      <div className="green-layer"></div>
      <Header text="My Trips" />
      <div className="tripList-container">
        <Triplist />
      </div>
    </div>
  );
}
