import React from "react";
import { CssBaseline } from "@mui/material";
import Header from "../header/header";
import Template from "../template/template";
import "../../App.css";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="root">
      <Navbar />
      <CssBaseline />
      <Header />
      <div>
        <Template />
      </div>

      <br />
      <Footer></Footer>
    </div>
  );
}

export default Home;
