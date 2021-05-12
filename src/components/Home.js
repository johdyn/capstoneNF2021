import "./Home.css";
import Triplist from "./Triplist";

export default function Home() {
  return (
    <div>
      <header className="home-header">
        <h1 className="h1-class">My Trips</h1>
      </header>
      <Triplist />
    </div>
  );
}
