import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.scss';
import Circuits from './Circuits'
import Circuit from './Circuit'
import Drivers from './Drivers';
import Driver from './Driver';
import Seasons from "./Seasons";
import Season from "./Season";
import Constructors from "./Constructors";
import Constructor from "./Constructor";
import Races from "./Races";
import Race from "./Race";
import Home from "./Home";

function App() {
  return (
    <Router>
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