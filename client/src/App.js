import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Inventory from "./components/Inventory/Inventory";

const App = () => (
  <Fragment>
    <Logo />
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/inventory" component={Inventory} />
  </Fragment>
);

export default App;

//TODO create provider for English/Spanish
//TODO create auth for administrator
