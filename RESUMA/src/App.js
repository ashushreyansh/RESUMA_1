import React from 'react';
import './App.css';
import { Login, Register } from './components/login/index';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home/home';
import ChronoResume from './components/form1/Resume';
import FunctionalResume from './components/form2/Resume';
import TargetedResume from './components/form3/Resume';
import CombinationalResume from './components/form4/Resume';
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
                <Route
                    exact
                    path='/chronologicalResume'
                    component={ChronoResume}
                />
                <Route
                    exact
                    path='/functionalResume'
                    component={FunctionalResume}
                />
                <Route
                    exact
                    path='/targetedResume'
                    component={TargetedResume}
                />
                <Route
                    exact
                    path='/combinationalResume'
                    component={CombinationalResume}
                />
                {/* <Route exact path="/aboutUs" component={AboutUs} /> */}
                {/* <Route exact component={Footer}/> */}
            </Switch>
        </Router>
    );
}

export default App;
