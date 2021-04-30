import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Summary from "./components/Summary";
import AddTrip from "./components/AddTrip";
import AddCar from "./components/AddCar";
import AddFlight from "./components/AddFlight";

function App() {
  return (
    <Router>
      <div className="App">
        <main class="main-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/summary">
              <Summary />
            </Route>
            <Route exact path="/add">
              <AddTrip />
            </Route>
            <Route exact path="/add-car">
              <AddCar />
            </Route>
            <Route exact path="/add-flight">
              <AddFlight />
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
