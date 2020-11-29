import React, { createContext, useState } from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Appoinment from "./Components/Appoinment";
import AppoinmentsByDate from "./Components/Dashboard/AppoinmentsByDate";
import Patient from "./Components/Dashboard/Patient";
import AddDoctor from "./Components/Dashboard/AddDoctor";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PrivateRoute from './Components/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({ name: '', email: '', password: '', error: '', success: false });
  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <PrivateRoute path="/appoinment">
            <Appoinment />
          </PrivateRoute>
          <PrivateRoute path="/Appoinments by date">
            <AppoinmentsByDate />
          </PrivateRoute>
          <PrivateRoute path="/Patients">
            <Patient />
          </PrivateRoute>
          <PrivateRoute path="/Add New Doctor">
            <AddDoctor />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
