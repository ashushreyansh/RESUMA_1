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
            px={{xs:3, sm:10}}
            py={{xs:5, sm:10}}
            bgcolor="text.secondary" color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
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
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box >
                                <Link href="/login" color="inherit">login</Link>
                            </Box>
                            <Box >
                                <Link color="inherit">Register</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box >
                                <Link color="inherit">Contact</Link>
                            </Box>
                            <Box >
                                <Link color="inherit">Support</Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:0}}>
                        RESUMA &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}