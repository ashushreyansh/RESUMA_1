import React from "react";
// import Navbar from "./components/navbar/navbar";
// import { makeStyles } from "@material-ui/core/styles";
// import { CssBaseline } from "@material-ui/core";
// import Header from "./components/header/header";
// import Template from "./components/template/template";
import './App.css';
import { Login, Register } from "./components/login/index";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home/home";
import Profile from "./components/profile/profile"
//import Footer from "./components/footer/footer";

function App() {
  // fetch('http://localhost:5000').then(res => 
  //   res.json()
  // ).then(data => console.log(data));
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact component={Home} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact component={Footer}/> */}
        </Switch>
    </Router>
  );
}

export default App;
