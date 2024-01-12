import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Footer from "../footer/footer";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/navbar";
import './Login.css';

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const changefield = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await dispatch(login(email, password));
    if (res.status === 1) {
      navigate("/");
    }
  };
  return (
    <div className="rootLogin">
      <Navbar />
      <div className="login">
        <div className="baseContainer">
          <div className="cheader">
            <h2>LOGIN</h2>
          </div>
          <div className="content">
            <form onSubmit={(e) => onFormSubmit(e)} className="form">
              <TextField
                value={email}
                onChange={(e) => changefield(e)}
                name="email"
                label="Email"
                variant="filled"
                type="email"
                required
              />
              <br />
              <TextField
                value={password}
                onChange={(e) => changefield(e)}
                name="password"
                label="Password"
                variant="filled"
                type="password"
                required
              />
              <div className="footer">
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#6f42c1" }}
                >
                  LogIn <LoginIcon className="logo"></LoginIcon>
                </Button>
                <br />
                <h4 style={{ marginTop: "20px" }}>
                  Register a new account
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", fontSize: "2rem" }}
                  >
                    <Button
                      type="submit"
                      variant="text"
                      style={{ color: "#000", borderBottom: "0px" }}
                    >
                      Register here
                    </Button>
                  </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
