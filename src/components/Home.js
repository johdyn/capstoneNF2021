import "./Home.css";
import Triplist from "./Triplist";
import Header from "./Header";

export default function Home() {
  return (
    <div className="tripList-container">
      <Header text="My Trips" headerClass="header" h1Class="h1-class" />
      <Triplist />
    </div>
  );
}
