import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import WeddingParty from "./pages/WeddingParty";
import Events from "./pages/Events";
import Photos from "./pages/Photos";
import Registry from "./pages/Registry";
import RSVP from "./pages/RSVP";
import Travel from "./pages/Travel";
import ThingsToDo from "./pages/ThingsToDo";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/weddingparty">
            <WeddingParty />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/registry">
            <Registry />
          </Route>
          <Route exact path="/rsvp">
            <RSVP />
          </Route>
          <Route exact path="/thingstodo">
            <ThingsToDo />
          </Route>
          <Route exact path="/travel">
            <Travel />
          </Route>
          <Route exact path="/photos">
            <Photos />
          </Route>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
