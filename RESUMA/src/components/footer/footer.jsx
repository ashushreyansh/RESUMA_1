import React  from 'react';
// import { Container, Grid, Box, Link} from '@mui/material';
import styles from './footer.module.css';

export default function Footer(){
    return (
        <footer className={`${styles['footer']}`}>
            <p><i className={`fa fa-twitter ${styles['footer-icon']}`}></i><i className={`fa fa-facebook ${styles['footer-icon']}`}></i><i className={`fa fa-instagram ${styles['footer-icon']}`}></i><i className={`fa fa-envelope ${styles['footer-icon']}`}></i></p>
            <p className={`${styles['p-footer']}`}>© Copyright 2021 Resuma</p>
        </footer>
    );
}
