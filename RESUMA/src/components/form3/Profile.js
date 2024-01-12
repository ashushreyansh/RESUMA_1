import React, { Component } from "react";
import { TextField, Button, Container } from "@mui/material"; // Change to '@mui/material'
import { Card, CardHeader, CardContent } from "@mui/material"; // Change to '@mui/material'
import NavigateNextIcon from "@mui/icons-material/NavigateNext"; // Change to '@mui/icons-material'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"; // Change to '@mui/icons-material'
import EmailIcon from "@mui/icons-material/Email"; // Change to '@mui/icons-material'
import PhoneIcon from "@mui/icons-material/Phone"; // Change to '@mui/icons-material'
import GitHubIcon from "@mui/icons-material/GitHub"; // Change to '@mui/icons-material'
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Change to '@mui/icons-material'
import TwitterIcon from "@mui/icons-material/Twitter"; // Change to '@mui/icons-material'
import EditIcon from "@mui/icons-material/Edit"; // Change to '@mui/icons-material'
import InputAdornment from "@mui/material/InputAdornment"; // Change to '@mui/material/InputAdornment'
import { Row, Col } from "react-bootstrap";
import { Paper, Grid } from "@mui/material";
import "./Profile.css";

class Profile extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Paper className="padding">
        <Card>
          <CardHeader title="Personal Details" />
        </Card>
        <CardContent>
          <div className="margin">
            <Grid container spacing={2} alignItems="center" item lg={12}>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="firstname"
                  label="First Name"
                  style={{ width: "80%" }}
                  required
                  value={values.firstname}
                  onChange={this.props.handleChange}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Last Name"
                  variant="standard"
                  style={{ width: "80%" }}
                  name="lastname"
                  required
                  value={values.lastname}
                  onChange={this.props.handleChange}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Email"
                  variant="standard"
                  name="email"
                  required
                  style={{ alignItems: "left", width: "80%" }}
                  value={values.email}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="About You"
                  variant="standard"
                  name="about"
                  style={{ alignItems: "left", width: "80%" }}
                  value={values.about}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EditIcon />
                      </InputAdornment>
                    ),
                  }}
                  inputProps={{
                    maxlength: 150,
                  }}
                  helperText={`${values.about.length}/150`}
                />
              </Grid>

              <Grid item lg={6} xs={12} sm={12} md={6}>
                <TextField
                  margin="dense"
                  label="Phone Number"
                  variant="standard"
                  name="phone"
                  style={{ alignItems: "left", width: "80%" }}
                  value={values.phone}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="GitHub"
                  variant="standard"
                  name="github"
                  style={{ alignItems: "left", width: "80%" }}
                  value={values.github}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <GitHubIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Linked In"
                  variant="standard"
                  name="linkedin"
                  style={{ alignItems: "left", width: "80%" }}
                  value={values.linkedin}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LinkedInIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12} lg={6}>
                <TextField
                  margin="dense"
                  label="Twitter"
                  variant="standard"
                  name="twitter"
                  style={{ alignItems: "left", width: "80%" }}
                  value={values.twitter}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Container className="margin">
              <Row>
                <Col lg={3} xs={0} />
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.nextStep}
                    disabled
                    startIcon={<NavigateBeforeIcon />}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={3} xs={5}>
                  <Button
                    variant="contained"
                    color="secondary"
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
        <p className="text-center text-muted">Page 1 </p>
      </Paper>
    );
  }
}

export default Profile;
