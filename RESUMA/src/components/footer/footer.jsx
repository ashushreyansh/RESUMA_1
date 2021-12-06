import React  from 'react';
import { Container, Grid, Box, Link} from '@material-ui/core';
//import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
    
  
//   }));

export default function Footer(){
    //const classes = useStyles();
    return (
        <footer>
            
            <Box 
            bgcolor="#6f42c1" color="#fff" style={{paddingTop: "20px"}}>

                <Container maxWidth="lg" style={{marginTop: "50px"}}>
                    <Grid container spacing={2} style= {{fontSize:"20px"}}>
                        <Grid item xs={5} sm={4} >
                            <Box>Help</Box>
                            <Box >
                                <Link color="inherit"   >Contact</Link>
                            </Box>
                            <Box >
                                <Link color="inherit">Support</Link>
                            </Box>
                            <Box >
                                <Link color="inherit">Privacy</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={4}>
                            <Box >Account</Box>
                            <Box >
                                <Link href="/login" color="inherit">login</Link>
                            </Box>
                            <Box >
                                <Link color="inherit">Register</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={5} sm={4}>
                            <Box>Help</Box>
                            <Box >
                                <Link color="inherit">Contact</Link>
                            </Box>
                            <Box >
                                <Link color="inherit">Support</Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center"  pb={{xs:5, sm:0}} style={{marginTop: "3rem"}}>
                        RESUMA &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
            
        </footer>
    );
}