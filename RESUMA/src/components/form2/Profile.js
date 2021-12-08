import React, { Component } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EditIcon from '@mui/icons-material/Edit';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col } from 'react-bootstrap';
import { Paper, withStyles, Grid } from '@material-ui/core';

const styles = (theme) => ({
    margin: {
        margin: theme.spacing.unit * 1,
    },
    padding: {
        padding: theme.spacing.unit,
    },
});

class Profile extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values } = this.props;
        const { classes } = this.props;
        return (
            <Paper className={classes.padding}>
                <Card>
                    <CardHeader title='Personal Details' />
                </Card>
                <CardContent>
                    <div className={classes.margin}>
                        <Grid container spacing={2} alignItems='center' lg={12}>
                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                <TextField
                                    margin='dense'
                                    variant='standard'
                                    name='firstname'
                                    label='First Name'
                                    style={{ width: '80%' }}
                                    required
                                    value={values.firstname}
                                    onChange={this.props.handleChange}
                                />
                            </Grid>
                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                <TextField
                                    margin='dense'
                                    label='Last Name'
                                    variant='standard'
                                    style={{ width: '80%' }}
                                    name='lastname'
                                    required
                                    value={values.lastname}
                                    onChange={this.props.handleChange}
                                />
                            </Grid>

                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                <TextField
                                    margin='dense'
                                    label='Email'
                                    variant='standard'
                                    name='email'
                                    required
                                    style={{ alignItems: 'left', width: '80%' }}
                                    value={values.email}
                                    onChange={this.props.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                <TextField
                                    margin='dense'
                                    label='About You'
                                    variant='standard'
                                    name='about'
                                    style={{ alignItems: 'left', width: '80%' }}
                                    value={values.about}
                                    onChange={this.props.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <EditIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    inputProps={{
                                        maxlength: 200,
                                    }}
                                    helperText={`${values.about.length}/200`}
                                />
                            </Grid>

                            <Grid item lg={6} xs={12} sm={12} md={6}>
                                <TextField
                                    margin='dense'
                                    label='Phone Number'
                                    variant='standard'
                                    name='phone'
                                    style={{ alignItems: 'left', width: '80%' }}
                                    value={values.phone}
                                    onChange={this.props.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <PhoneIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                <TextField
                                    margin='dense'
                                    label='GitHub'
                                    variant='standard'
                                    name='github'
                                    style={{ alignItems: 'left', width: '80%' }}
                                    value={values.github}
                                    onChange={this.props.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <GitHubIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                <TextField
                                    margin='dense'
                                    label='Linked In'
                                    variant='standard'
                                    name='linkedin'
                                    style={{ alignItems: 'left', width: '80%' }}
                                    value={values.linkedin}
                                    onChange={this.props.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <LinkedInIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} sm={12} xs={12} lg={6}>
                                <TextField
                                    margin='dense'
                                    label='Twitter'
                                    variant='standard'
                                    name='twitter'
                                    style={{ alignItems: 'left', width: '80%' }}
                                    value={values.twitter}
                                    onChange={this.props.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <TwitterIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Container className={classes.margin}>
                            <Row>
                                <Col lg={3} xs={0} />
                                <Col lg={3} xs={5}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={this.nextStep}
                                        disabled
                                        startIcon={<NavigateBeforeIcon />}
                                    >
                                        Back
                                    </Button>
                                </Col>
                                <Col lg={3} xs={5}>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={this.continue}
                                        endIcon={<NavigateNextIcon />}
                                    >
                                        Next
                                    </Button>
                                </Col>
                                <Col lg={3} xs={1} />
                            </Row>
                        </Container>
                    </div>
                </CardContent>
                <p className='text-center text-muted'>Page 1 </p>
            </Paper>
        );
    }
}

export default withStyles(styles)(Profile);
