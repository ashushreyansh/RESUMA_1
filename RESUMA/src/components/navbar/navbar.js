import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";
import AlertContainer from "../AlertsContainer/AlertsContainer";
import "./navbarStyles.css";

export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const logoutUser = async (e) => {
    e.preventDefault();
    await dispatch(logout());
  };

  return (
    <div>
      <AlertContainer />
      <AppBar className="appbarNav" elevation={0} style={{backgroundColor:"#6f42c1"}}>
        <Toolbar className="appbarWrapperNav">
          <h1 className="appbarTitle">
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              RE<span className="colorText">SUMA</span>
            </Link>
          </h1>
          {auth.authenticated ? (
            <>
              <IconButton onClick={(e) => logoutUser(e)}>
                <LoginIcon className="icon" />
                <span className="text">Logout</span>
              </IconButton>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <IconButton>
                  <HowToRegIcon className="icon" />
                  <span className="text">Register</span>
                </IconButton>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <IconButton>
                  <LoginIcon className="icon" />
                  <span className="text">Login</span>
                </IconButton>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
