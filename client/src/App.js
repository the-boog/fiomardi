import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Logo from "./components/Logo";
import Inventory from "./components/Inventory/Inventory";
import Car from "./components/Inventory/Car"

const App = () => (
  <Fragment>
    <Logo />
    <Navbar />
    <div style={{ margin: "20px" }}>
      <Route exact path="/" component={Home} />
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/inventory/:id" component={Car} />
    </div>
  </Fragment>
);

export default App;

//TODO create provider for English/Spanish
//TODO create auth for administrator
