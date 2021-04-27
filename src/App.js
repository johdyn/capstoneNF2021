import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Router>
      <div className="App">
        <main class="main-content">
          <Switch>
            <Route exact path="/">
              <h1>My Trips</h1>
            </Route>
            <Route exact path="/summary">
              <h1>Total CO2</h1>
            </Route>
            <Route exact path="/add">
              <h1>Add</h1>
            </Route>
            <Route exact path="/add-car">
              <h1>Add Car Ride</h1>
            </Route>
            <Route exact path="/add-flight">
              <h1>Add Flight</h1>
            </Route>
          </Switch>
        </main>
        <footer>
          <Navigation />
        </footer>
      </div>
    </Router>
  );
}

export default App;

{
  /* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />

</header> */
}
