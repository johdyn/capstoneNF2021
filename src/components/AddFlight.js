import AddFlightForm from "./AddFlightForm";
import "./AddFlight.css";

export default function AddFlight() {
  return (
    <div className="">
      <header className="Header">
        <h1 className="add-flight-header">Add Flight</h1>
      </header>
      <article>
        <AddFlightForm />
      </article>
    </div>
  );
}
