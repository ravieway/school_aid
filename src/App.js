import React, { Component } from 'react';
import Home from './screens/Home';
import Donation from "./screens/Donation"
import Login from "./screens/Login"
import SuccessStories from "./screens/SuccessStories"
import {Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/donation" component={Donation}/>
          <Route path="/Login" component={Login}/>
          <Route path="/successstories" component={SuccessStories}/>
        </Switch>
      </div>
    );
  }
}

export default App;
