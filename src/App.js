import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navibar from './Components/Navibar';
import Home from './Components/Home';
import Appoinment from "./Components/Appoinment";

function App() {
  return (
    <Router>
      <Navibar />
      <Switch>        
        <Route path="/appoinment">
          <Appoinment />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
