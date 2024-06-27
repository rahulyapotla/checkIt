import React, { Component } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import About from "../About/about";
import Try from "../Try/try";
import Login from "../Login/login";
import Blog from "../Blog/blog";
import Home from "../Home/home";
import Cert from "../Cert/cert";
import AdminLayout from "../layouts/Admin.jsx";
import Contact from "../Contact/Contact";
import Pricing from "../Pricing/price"
import Temp from "../Pricetemp/temp";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/try" component={Try}></Route>
          <Route path="/pricing" component={Pricing}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/cert" component={Cert}></Route>
          <Route path="/price" component={Temp}></Route>

          <Route
            path="/admin"
            render={(props) => <AdminLayout {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
