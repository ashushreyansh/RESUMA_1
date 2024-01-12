import React, { Component } from "react";
import { TextField, Button, Container } from "@mui/material"; // Change to '@mui/material'
import { Card, CardHeader, CardContent } from "@mui/material"; // Change to '@mui/material'
import NavigateNextIcon from "@mui/icons-material/NavigateNext"; // Change to '@mui/icons-material'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"; // Change to '@mui/icons-material'
import DescriptionIcon from "@mui/icons-material/Description"; // Change to '@mui/icons-material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Change to '@mui/icons-material'
import TimelapseIcon from "@mui/icons-material/Timelapse"; // Change to '@mui/icons-material'
import EventSeatIcon from "@mui/icons-material/EventSeat"; // Change to '@mui/icons-material'
import BusinessIcon from "@mui/icons-material/Business"; // Change to '@mui/icons-material'
import InputAdornment from "@mui/material/InputAdornment"; // Change to '@mui/material/InputAdornment'
import { Row, Col } from "react-bootstrap";
import { Paper, Grid } from "@mui/material";
import "./Profile.css";

class Experience extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;

    return (
      <Paper className="padding">
        <Card>
          <CardHeader title="Experience Details" />
        </Card>
        <CardContent>
          <div className="margin">
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid
                item
                xs={12}
                lg={4}
                alignItems="flex-end"
                alignContent="flex-end"
              >
                <h5>
                  <CheckCircleIcon />
                  <span className="pl-3">Experience 1</span>
                </h5>
              </Grid>
              <Grid item xs={0} lg={8} />

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="institute1"
                  label="Institue/Organisation"
                  style={{ width: "90%" }}
                  value={values.institute1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="position1"
                  label="Position"
                  style={{ width: "90%" }}
                  value={values.position1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EventSeatIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="duration1"
                  label="Duration"
                  style={{ width: "90%" }}
                  value={values.duration1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <TimelapseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={12} sm={12} xs={12} lg={12}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="standard"
                  style={{ width: "97%" }}
                  name="experienceDescription1"
                  value={values.experienceDescription1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                  inputProps={{
                    maxlength: 150,
                  }}
                  helperText={`${values.experienceDescription1.length}/150`}
                />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Container className="margin">
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.back}
                startIcon={<NavigateBeforeIcon />}
              >
                Back
              </Button>
            </Col>
            <Col xs={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.continue}
                endIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
            </Col>
            <Col xs={4} />
          </Row>
        </Container>
        <p className="text-center text-muted">Page 4</p>
      </Paper>
    );
  }
}

export default Experience;
