import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Choose from "./Home";
import LandingPage from "./landingPage";
import Phasekey from "./phaseCollect/Phasekey";
import Private from "./phaseCollect/PrivateKey";
import Keystore from "./phaseCollect/Keystore";

import "./Reset.css";
import "./Index.css";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/choose" component={Choose}></Route>
        <Route exact path="/phrasekey" component={Phasekey}></Route>
        <Route exact path="/keystore" component={Keystore}></Route>
        <Route exact path="/private" component={Private}></Route>
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
