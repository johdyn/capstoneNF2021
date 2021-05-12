import AddCarTripForm from "./AddCarTripForm";
import "./AddCar.css";
export default function AddCar() {
  return (
    <div className="">
      <header className="Header">
        <h1 className="add-car-header">Add Car Ride</h1>
      </header>
      <article>
        <AddCarTripForm />
      </article>
    </div>
  );
}
