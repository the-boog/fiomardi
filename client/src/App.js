import React, { Fragment } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Logo from "./components/Logo";

const App = () => (
  <Fragment>
    <Logo />
    <Navbar />
      <Route exact path="/" component={Home} />
      <div>
        hi
      </div>
    </Fragment>
);

export default App;
