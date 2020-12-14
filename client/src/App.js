import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import WeddingParty from "./pages/WeddingParty";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/WeddingParty" component={WeddingParty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
