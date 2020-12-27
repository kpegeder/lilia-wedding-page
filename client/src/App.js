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
          <Route path="/weddingparty">
            <WeddingParty />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/rsvp">
            <RSVP />
          </Route>
          <Route path="/thingstodo">
            <ThingsToDo />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path={["/", "/home"]}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
