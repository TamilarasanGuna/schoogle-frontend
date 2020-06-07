import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import teacherdetails from "./teacherdetails/teacherdetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teacherdetails" component={teacherdetails} />
      </Switch>
    </div>
  );
}

export default App;
