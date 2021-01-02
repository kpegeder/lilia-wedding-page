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
          {/* <Route path="/weddingparty" component={WeddingParty} /> */}
          <Route path="/weddingparty">
            <WeddingParty />
          </Route>
          <Route path="/events" component={Events} />
          <Route path="/registry" component={Registry} />
          <Route path="/rsvp" component={RSVP} />
          <Route path="/thingstodo" component={ThingsToDo} />
          <Route path="/travel" component={Travel} />
          <Route path="/photos" component={Photos} />
          <Route path={["/", "/home"]} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
