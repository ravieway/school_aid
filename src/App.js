import React, { Component } from 'react';
import Home from './screens/Home';
import About from './screens/About';
import AdminPanel from './screens/AdminPanel';
import MemberPanel from './screens/MemberPanel';
import Donation from "./screens/Donation"
import Login from "./screens/Login"
import SuccessStories from "./screens/SuccessStories"
import Contact from "./screens/Contact"
import {Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/adminpanel" component={AdminPanel}/>
          <Route path="/memberpanel" component={MemberPanel}/> 
          <Route path="/about" component={About}/>
          <Route path="/donation" component={Donation}/>
          <Route path="/Login" component={Login}/>
          <Route path="/successstories" component={SuccessStories}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default App;
