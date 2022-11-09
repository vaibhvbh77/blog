import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Card from "./components/Card";
import NavBar from "./components/Nav";
import Nav from "./components/Nav";
import Form from "./components/screens/Form";
import Listing from "./components/screens/Listing";
import User from "./components/screens/User";
import "/Users/test/Desktop/Assignement/blog/src/App.css";
import Welcome from "./components/screens/Welcome";

const App = () => {
  return (
    <Card>
      {/* <hi>This is the home page</hi> */}
      {/* <NavBar /> */}

      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>

        <Route path="/user" exact>
          <Listing />
        </Route>

        <Route path="/id" exact>
          <User />
        </Route>
      </Switch>
    </Card>
  );
};
export default App;
