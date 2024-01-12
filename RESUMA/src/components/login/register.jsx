import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import Footer from "../footer/footer";
import Navbar from ".././navbar/navbar";
import { useDispatch } from "react-redux";
import { register } from "../../actions/auth";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';

export function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const { firstname, lastname, email, password } = formData;

  const changefield = (e) => {
    e.preventDefault();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await dispatch(
      register({ firstname, lastname, email, password })
    );
    if (res.status === 1) {
      navigate("/login");
    }
  };
  return (
    <div className="rootRegister">
      <Navbar />
      <div className="register">
        <div className="baseContainer">
          <div className="header">
            <h2>Register</h2>
          </div>
          <div className="content">
            <form onSubmit={(e) => onFormSubmit(e)} className="form">
              <TextField
                value={firstname}
                onChange={(e) => changefield(e)}
                name="firstname"
                label="First Name"
                variant="filled"
              />
              <br />
              <TextField
                value={lastname}
                onChange={(e) => changefield(e)}
                name="lastname"
                label="Last Name"
                variant="filled"
              />
              <br />
              <TextField
                value={email}
                onChange={(e) => changefield(e)}
                name="email"
                label="Email"
                variant="filled"
                type="email"
              />
              <br />
              <TextField
                value={password}
                onChange={(e) => changefield(e)}
                name="password"
                label="Password"
                variant="filled"
                type="password"
              />
              <div className="footer">
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#6f42c1" }}
                >
                  Register <LoginIcon className="logo"></LoginIcon>
                </Button>
                <br />
                <h4>
                  Already a Member, then
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button
                      type="submit"
                      variant="text"
                      style={{ color: "#000", borderBottom: "0px" }}
                    >
                      Login
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
