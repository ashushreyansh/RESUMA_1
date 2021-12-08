import React,{ useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Footer from '../footer/footer';
import Navbar from '.././navbar/navbar'
//import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../actions/auth";
import { Link, useHistory } from 'react-router-dom';
//import { useHistory, useLocation } from 'react-router-dom';
//import { login, authUser } from '../../actions/auth';


const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100vh",
        backgroundImage:`url(${process.env.PUBLIC_URL + "/images/bg5.jpg"})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    },
    register:{
        minHeight:"791px",
        alignItems:'center',
        justifyContent:'center',
        display: 'flex',
        flexDirection: 'column',
    },
    baseContainer:{
        background: 'linear-gradient(to right, #f2fcfe, #6f42c1)',
        padding:'50px 10px',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        boxShadow:'0px 0px 12px 1px #295cadb2;',
        borderRadius:'10px 30px 10px 30px',
    },
    header:{
        marginTop:'20px',
        marginBottom:'20px',
    },
    content:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    logo:{
        //padding:'20px',
        marginLeft:'10px',
    },
    form:{
        //marginTop: '2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        // '& TextFeild':{

        // },
    },
    footer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        margin:'20px',
    },
  
  }));

export function Register() {
    
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email: '',
        password: '',
    });
    const { firstname, lastname, email, password } = formData;

    const changefield=(e) =>{
        e.preventDefault();

        setFormData({ ...formData, [e.target.name]: e.target.value });
        //console.log(formData);
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const res = await dispatch(register({ firstname, lastname, email, password }));
        if(res.status === 1){
            history.push('/login');
        }
    };
    const classes = useStyles();
      return (
          <div className={classes.root}>
              <Navbar />
              <div className={classes.register}>
                <div className={classes.baseContainer}>
                    <div className={classes.header}>
                        <h2>Register</h2>
                    </div>
                    <div className={classes.content}>
                        <form onSubmit={(e) => onFormSubmit(e)} className={classes.form}>
                            <TextField value={ firstname } onChange={(e) => changefield(e)} name="firstname" label="First Name" variant="filled" />
                            <br />
                            <TextField value={ lastname } onChange={(e) => changefield(e)} name="lastname" label="Last Name" variant="filled" />
                            <br />
                            <TextField value={ email } onChange={(e) => changefield(e)} name="email" label="Email" variant="filled" type="email" />
                            <br />
                            <TextField value={ password } onChange={(e) => changefield(e)} name="password" label="Password" variant="filled" type="password" />
                            <div className={classes.footer}>
                                <Button type="submit" variant="contained" style={{backgroundColor: "#6f42c1"}}>
                                    Register <LoginIcon className={classes.logo}></LoginIcon>
                                </Button>
                                <br/>
                                <h4>Already a Member, then 
                                    <Link to='/login' style = {{textDecoration: "none"}}>
                                    <Button type="submit" variant="text" style={{color:"#000", borderBottom: "0px"}}>
                                        Login
                                    </Button>
                                    </Link>
                                </h4>
                            </div>
                        </form>
                        
                    </div>
                    
                </div>
            </div>
            <Footer/>
          </div>
            
    );
}