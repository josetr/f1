import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.scss';
import Circuits from './pages/Circuits'
import Circuit from './pages/Circuit'
import Drivers from './pages/Drivers';
import Driver from './pages/Driver';
import Seasons from "./pages/Seasons";
import Season from "./pages/Season";
import Constructors from "./pages/Constructors";
import Constructor from "./pages/Constructor";
import Races from "./pages/Races";
import Race from "./pages/Race";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename="f1">
      <header className="app-header">
        <nav className="app-nav">
          <ul>
            <li>
              <NavLink activeClassName="active-link" exact={true} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/drivers">Drivers</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/races">Races</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/constructors">Constructors</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/circuits">Circuits</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" to="/seasons">Seasons</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="app-main">
        <Switch>
          <Route path="/circuits/:circuit" component={Circuit} />
          <Route path="/circuits" component={Circuits} />
          <Route path="/drivers/:driver" component={Driver} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/seasons/:season" component={Season} />
          <Route path="/seasons" component={Seasons} />
          <Route path="/constructors/:constructor" component={Constructor} />
          <Route path="/constructors" component={Constructors} />
          <Route path="/races/:season?/:race" component={Race} />
          <Route path="/races" component={Races} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      <footer className="app-footer">
        Copyright (C) 2021 Jose Torres
      </footer>
    </Router>
  );
}

export default App;