import React, { Component } from "react";
import Profile from "./Profile";
import Education from "./Education";
import Experience from "./Experience";
import Extras from "./Extras";
import Navbar from "../navbar/navbar";

export class Resume extends Component {
  state = {
    step: 1,
    // Personal Profile Details...
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    about: "",

    // Education Information
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1: "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",

    // Experience Information
    institute1: "",
    position1: "",
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",
    institute3: "",
    position3: "",
    duration3: "",
    experienceDescription3: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;
    const {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      about,
      github,
      linkedin,
      twitter,

      // Education Information
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,
      institute3,
      position3,
      duration3,
      experienceDescription3,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    } = this.state;
    const values = {
      // Profile-Information
      firstname,
      lastname,
      email,
      phone,
      about,
      github,
      linkedin,
      twitter,
      // Education Information
      college,
      fromyear1,
      toyear1,
      qualification1,
      description1,
      school,
      fromyear2,
      toyear2,
      qualification2,
      description2,

      // Experience Information
      institute1,
      position1,
      duration1,
      experienceDescription1,
      institute2,
      position2,
      duration2,
      experienceDescription2,
      institute3,
      position3,
      duration3,
      experienceDescription3,

      // Extra Information
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      skill6,
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6,
    };
    switch (step) {
      case 1:
        return (
          <div
            style={{
              minHeight: "100vh",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/bg5.jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Navbar />
            <div className="App" style={{ paddingTop: "100px" }}>
              <div className="container col-lg-10 mx-auto text-center">
                <Profile
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div
            style={{
              minHeight: "100vh",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/bg5.jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Navbar />
            <div className="App" style={{ paddingTop: "100px" }}>
              <div className="container col-lg-10 mx-auto text-center">
                <Education
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div
            style={{
              minHeight: "100vh",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/bg5.jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Navbar />
            <div className="App" style={{ paddingTop: "100px" }}>
              <div className="container col-lg-10 mx-auto text-center">
                <Experience
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div
            style={{
              minHeight: "100vh",
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/images/bg5.jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Navbar />
            <div className="App" style={{ paddingTop: "100px" }}>
              <div className="container col-lg-10 mx-auto text-center">
                <Extras
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </div>
            </div>
          </div>
        );
      default:
        return <div />;
    }
  }
}

export default Resume;
