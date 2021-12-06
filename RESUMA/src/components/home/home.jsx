import React from "react";
// import Navbar from "./components/navbar/navbar";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "../header/header";
import Template from "../template/template";
import '../../App.css';
import Footer from '../footer/footer';

const useStyles = makeStyles((theme) => ({
    // root:{
    //   minHeight:"100vh",
    //   backgroundImage:`url(${process.env.PUBLIC_URL + "/images/bg1.jpg"})`,
    //   backgroundRepeat:'no-repeat',
    //   backgroundSize:'cover'
    // }
  
  }));


  function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Template />
            <br />
            <Footer></Footer>
        </div>
    );
  }
  
  export default Home;
  