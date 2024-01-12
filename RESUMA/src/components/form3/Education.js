import React, { Component } from "react";
import {
  TextField,
  Button,
  Container,
  Divider,
  Paper,
  Grid,
} from "@mui/material"; // Change to '@mui/material'
import { Card, CardHeader, CardContent } from "@mui/material"; // Change to '@mui/material'
import NavigateNextIcon from "@mui/icons-material/NavigateNext"; // Change to '@mui/icons-material'
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"; // Change to '@mui/icons-material'
import InputAdornment from "@mui/material/InputAdornment"; // Change to '@mui/material'
import { Row, Col } from "react-bootstrap";
import "date-fns";
import SchoolIcon from "@mui/icons-material/School"; // Change to '@mui/icons-material/School'
import DateRangeIcon from "@mui/icons-material/DateRange"; // Change to '@mui/icons-material/DateRange'
import "./Profile.css";

class Education extends Component {
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
          <CardHeader title="Education Details" />
        </Card>
        <CardContent>
          <div className="margin">
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="college"
                  label="College/Unviersity"
                  style={{ width: "80%" }}
                  required
                  value={values.college}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="fromyear1"
                  label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.fromyear1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="toyear1"
                  type="date"
                  label="To Year"
                  style={{ width: "80%" }}
                  required
                  value={values.toyear1}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="standard"
                  style={{ width: "80%" }}
                  name="qualification1"
                  required
                  value={values.qualification1}
                  onChange={this.props.handleChange}
                />
              </Grid>
            </Grid>
            <br />
            <Divider />
            <br />
            <Grid container spacing={2} alignItems="center" lg={12}>
              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="school"
                  label="School"
                  style={{ width: "80%" }}
                  required
                  value={values.school}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item md={4} sm={6} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  variant="standard"
                  name="fromyear2"
                  label="From Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.fromyear2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={6} xs={12} lg={4}>
                {/* <CustomDatePicker
                  name={'toyear2'}
                  label={'To Year'}
                  value={values.toyear2}
                /> */}
                <TextField
                  margin="dense"
                  variant="standard"
                  name="toyear2"
                  label="To Year"
                  type="date"
                  style={{ width: "80%" }}
                  required
                  value={values.toyear2}
                  onChange={this.props.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="standard"
                  style={{ width: "80%" }}
                  name="qualification2"
                  required
                  value={values.qualification2}
                  onChange={this.props.handleChange}
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
        <p className="text-center text-muted">Page 2</p>
      </Paper>
    );
  }
}

export default Education;
