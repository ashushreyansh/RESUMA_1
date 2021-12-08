import React,{ useState, useEffect } from "react";
//import loginImg from "../../images/fingerprint.svg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Footer from '../footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../actions/auth";
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../navbar/navbar';
const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100vh",
        backgroundImage:`url(${process.env.PUBLIC_URL + "/images/bg5.jpg"})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    },
    login:{
        minHeight:"791px",
        // background: '#427a99',
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
        marginLeft:'10px',
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
    },
    footer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        margin:'20px',
    },
}));

export function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;
    
    const changefield=(e) =>{
        e.preventDefault();
    
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const dispatch = useDispatch();
    
    const history = useHistory();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const res = await dispatch(login( email, password ));
        if(res.status === 1){
            history.push('/');
        }
    };

    const classes = useStyles();
      return (
          <div className={classes.root}>
              <Navbar />
              <div className={classes.login}>
                <div className={classes.baseContainer}>
                    <div className={classes.header}>
                        <h2>LOGIN</h2>
                    </div>
                    <div className={classes.content}>
                        {/* <div className={classes.form}>
                            <div className={classes.formgroup}>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" />
                            </div>
                            <div className={classes.formgroup}>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" />
                            </div>
                        </div> */}
                        <form onSubmit={(e) => onFormSubmit(e)} className={classes.form}>
                            {/* <TextField label="First Name" variant="filled" required />
                            <TextField label="Last Name" variant="filled" required /> */}
                            <TextField value={ email } onChange={(e) => changefield(e)} name="email" label="Email" variant="filled" type="email" required />
                            <br />
                            <TextField value={ password } onChange={(e) => changefield(e)} name="password" label="Password" variant="filled" type="password" required />
                            <div className={classes.footer}>
                                <Button type="submit" variant="contained" style={{backgroundColor: "#6f42c1"}}>
                                    LogIn <LoginIcon className={classes.logo}></LoginIcon>
                                </Button>
                                <br/>
                                <h4 style={{marginTop: "20px"}}>Register a new account
                                <Link to='/register' style = {{textDecoration: "none", fontSize:"2rem"}}>
                                    <Button type="submit" variant="text" style={{color:"#000", borderBottom: "0px"}}>
                                        Register here   
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