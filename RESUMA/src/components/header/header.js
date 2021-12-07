import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
//import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

//import Modal from 'react-bootstrap/Modal'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
    },
    appbar: {
        background: 'none',
        position: 'absolute',
        backgroundColor: '#6f42c1',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
        color: '#000',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    text: {
        color: '#fff',
        marginLeft: '5px',
        fontSize: '1rem',
    },
    colorText: {
        // color: '#427ad4',
        color: '#fff',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#000',
        fontSize: '4.5rem',
    },
    goDown: {
        // color: '#427ad4',
        color: '#6f42c1',
        fontSize: '4rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // // const [show, setShow] = useState(false);
    // // const handleClose = () => setShow(false);
    // // const handleShow = () => setShow(true);
    // const logoutUser = async (e) => {
    //     e.preventDefault();
    //     await dispatch(logout());
    // };

    return (
        <div className={classes.root} id='header'>
            <Navbar></Navbar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 1500 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Start Making <br />
                        your
                        <span>
                            {' '}
                            RE<span style={{ color: '#6f42c1' }}>SUME</span>
                        </span>
                    </h1>
                    <Scroll to='card' smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}
