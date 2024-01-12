import React from "react";
import "./App.css";
import { Login, Register } from "./components/login/index";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/home/home";
import ChronoResume from "./components/form1/Resume";
import FunctionalResume from "./components/form2/Resume";
import TargetedResume from "./components/form3/Resume";
import CombinationalResume from "./components/form4/Resume";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuthenticated ? (
          <>
            <Route path="/chronologicalResume" element={<ChronoResume />} />
            <Route path="/functionalResume" element={<FunctionalResume />} />
            <Route path="/targetedResume" element={<TargetedResume />} />
            <Route
              path="/combinationalResume"
              element={<CombinationalResume />}
            />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
