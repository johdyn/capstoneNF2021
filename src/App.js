import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Summary from "./components/Summary";
import AddTrip from "./components/AddTrip";

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
            <Route exact path="/add-trip">
              <AddTrip />
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
