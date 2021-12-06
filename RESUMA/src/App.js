import React from 'react';
import './App.css';
import { Login, Register } from './components/login/index';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home/home';
import Profile from './components/profile/profile';
// import AboutUs from "./components/AboutUS/aboutUs";
//import Footer from "./components/footer/footer";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route exact component={Home} /> */}
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/profile' component={Profile} />
                {/* <Route exact path="/aboutUs" component={AboutUs} /> */}
                {/* <Route exact component={Footer}/> */}
            </Switch>
        </Router>
    );
}

export default App;
