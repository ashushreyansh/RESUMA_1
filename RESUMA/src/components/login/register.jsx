import React,{ useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Footer from '../footer/footer';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100vh",
        backgroundImage:`url(${process.env.PUBLIC_URL + "/images/bg1.jpg"})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        // alignItems:'center',
        // justifyContent:'center',
        // display: 'flex',
        // flexDirection: 'column',
    },
    register:{
        minHeight:"791px",
        //background: '#427a99',  /* fallback for old browsers */
        //background: '-webkit-linear-gradient(to right, #f2fcfe, #1c92d2)',  /* Chrome 10-25, Safari 5.1-6 */
        //background: 'linear-gradient(to right, #f2fcfe, #1c92d2)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // backgroundRepeat:'no-repeat',
        // backgroundSize:'cover',
        alignItems:'center',
        justifyContent:'center',
        display: 'flex',
        flexDirection: 'column',
    },
    baseContainer:{
        background: 'linear-gradient(to right, #f2fcfe, #1c92d2)',
        padding:'40px',
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
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const formSubmit=() =>{

    };
    // const onChangeValue=(e) =>{
    //     setFname(e.target.value);
    // };

    const classes = useStyles();
      return (
          <div className={classes.root}>
              <div className={classes.register}>
                <div className={classes.baseContainer}>
                    <div className={classes.header}>
                        <h2>Register</h2>
                    </div>
                    <div className={classes.content}>
                        <form className={classes.form}>
                            <TextField value={ fname } onChange={(e) => setFname(e.target.value)} label="First Name" variant="filled" required />
                            <br />
                            <TextField value={ fname } label="Last Name" variant="filled" required />
                            <br />
                            <TextField label="Email" variant="filled" type="email" required />
                            <br />
                            <TextField label="Password" variant="filled" type="password" required />
                        </form>
                    </div>
                    <div className={classes.footer}>
                        <Button type="submit" variant="contained" color="primary">
                            Register <LoginIcon className={classes.logo}></LoginIcon>
                        </Button>
                        <br/>
                        <h4>Already a Member, then 
                            <Button href="/login" type="submit" variant="text" color="inherit" onSubmit={formSubmit()}>
                                Login
                            </Button>
                        </h4>
                    </div>
                </div>
            </div>
            <Footer></Footer>
          </div>
            
    );
}