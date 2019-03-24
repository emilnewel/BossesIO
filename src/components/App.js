import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Bosses from "./Bosses/Bosses";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bosses" component={Bosses} />
          <Route path="*" render={() => <div>404 not found</div>} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
