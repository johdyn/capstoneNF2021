import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import MyTrips from "./components/MyTrips";
import Summary from "./components/Summary";
import AddTrip from "./components/AddTrip";
import AddCarTripForm from "./components/AddCarTripForm";
import AddFlightForm from "./components/AddFlightForm";
import AddTrainForm from "./components/AddTrainForm";

function App() {
  return (
    <Router>
      <div className="App">
        <main class="main-content">
          <Switch>
            <Route exact path to="/">
              <MyTrips />
            </Route>
            <Route exact path="/summary">
              <Summary />
            </Route>
            <Route exact path="/add-trip">
              <AddTrip />
            </Route>
            <Route exact path="/add-trip/add-car">
              <AddCarTripForm />
            </Route>
            <Route exact path="/add-trip/add-flight">
              <AddFlightForm />
            </Route>
            <Route exact path="/add-trip/add-train">
              <AddTrainForm />
            </Route>
          </Switch>
        </main>
        <footer className="Footer">
          <Navigation />
        </footer>
      </div>
    </Router>
  );
}

export default App;
