import "./MyTrips.css";
import Triplist from "./Triplist";
import Header from "./Header";
import { initializeLocalStorage } from "../services/tripStorage";
export default function MyTrips() {
  initializeLocalStorage();
  return (
    <div>
      <Header text="My Trips" headerClass="header" h1Class="h1-class" />
      <div className="tripList-container">
        <Triplist />
      </div>
    </div>
  );
}
