import React, { Component } from 'react';
import Home from './screens/Home';
import Donation from "./screens/Donation"
import {Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/donation" component={Donation}/>
        </Switch>
      </div>
    );
  }
}

export default App;
