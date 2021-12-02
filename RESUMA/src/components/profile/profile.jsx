import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import ProfileImg from "../../images/profile.png";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import AddIcon from "@mui/icons-material/Add";
//import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles(() => ({
  page: {
    background: "#427a99",
    display: "flex",
    flexDirection: "column",
    //justifyContent: 'center',
    alignItems: "center",
    minHeight: "753px",
  },
  // header:{
  //     position:'fixed',
  // },
  appbar: {
    background: "none",
    position: "fixed",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  text: {
    color: "#fff",
    marginLeft: "5px",
    fontSize: "1rem",
  },
  colorText: {
    color: "#427ad4",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  gridHeader: {
    boxShadow: "0px 0px 12px 1px #295cadb2",
    marginBottom: "80px",
    // width:'100%',
  },
  mainGrid: {
    paddingLeft: "150px",
    paddingRight: "150px",
  },
  Image: {
    boxShadow: "0px 0px 12px 1px #295cadb2",
    backgroundColor: "white",
    borderRadius: "10px",
    marginLeft: "10px",
    padding: "7px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  aboutme: {
    boxShadow: "0px 0px 12px 1px #295cadb2",
    backgroundColor: "white",
    borderRadius: "10px",
    marginRight: "10px",
    padding: "20px",
  },
  contentLeft: {
    boxShadow: "0px 0px 12px 1px #295cadb2",
    //marginTop:'80px',
    //height:"100%",
    position: "sticky",
    backgroundColor: "white",
    borderRadius: "10px",
    marginLeft: "10px",
    padding: "10px",
    marginBottom: "10px",
    //borderBottom:"2px black",
  },
  contentRight: {
    boxShadow: "0px 0px 12px 1px #295cadb2",
    //marginTop:'80px',
    //height:"100%",
    backgroundColor: "white",
    borderRadius: "10px",
    marginRight: "10px",
    padding: "20px",
    marginBottom: "10px",
  },
  ProfileImg: {
    height: "100px",
    width: "100px",
    margin: "20px",
  },
  educationHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  internshipHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trainingHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  projectHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  achievementHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export default function Profile() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const logoutUser = async (e) => {
    e.preventDefault();
    await dispatch(logout());
  };

  return (
    <div>
      <div className={classes.page}>
        <Grid container spacing={3} className={classes.mainGrid}>
          <Grid item md={12}>
            <div className={classes.gridHeader}>
              <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                  <h1 className={classes.appbarTitle}>
                    RE<span className={classes.colorText}>SUMA</span>
                  </h1>
                  {auth.authenticated ? (
                    <>
                      <IconButton onClick={(e) => logoutUser(e)}>
                        <LoginIcon className={classes.icon} />
                        <span className={classes.text}>Logout</span>
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton href="/login">
                        <LoginIcon className={classes.icon} />
                        <span className={classes.text}>Login</span>
                      </IconButton>
                    </>
                  )}
                      <IconButton href="/">
                        <HomeIcon className={classes.icon} />
                        <span className={classes.text}>Home</span>
                      </IconButton>
                      <IconButton>
                      <InfoIcon className={classes.icon} />
                        <span className={classes.text}>About Us</span>
                      </IconButton>
                  
                </Toolbar>
              </AppBar>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className={classes.Image}>
              <div>
                <img
                  className={classes.ProfileImg}
                  src={ProfileImg}
                  alt="imugi"
                />
              </div>
              <div>
                <span>EMAIL: </span>
                <br />
                <span>CONTACT: </span>
              </div>
            </div>
          </Grid>
          <Grid item md={9}>
            <div className={classes.aboutme}>
              <span>About Me: </span>
              <br />
              <span>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </span>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className={classes.contentLeft}>
              <span>NAME: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>EDUCATION: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>JOBS: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>INTERNSHIP: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>TRAINING/COURSES: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>PROJECTS: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>SKILLS: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>PORTFOLIO: </span>
            </div>
            <br />
            <div className={classes.contentLeft}>
              <span>ACHIEVEMENTS: </span>
            </div>
          </Grid>
          <Grid item md={9}>
            <div className={classes.contentRight}>
              <span style={{ marginRight: "10px" }}>FIRSTNAME: </span>
              <span>Lorem </span>
              <br />
              <br />
              <span style={{ marginRight: "10px" }}>LASTNAME: </span>
              <span>Ipsum </span>
            </div>
            <div className={classes.contentRight}>
              <div className={classes.educationHeader}>
                <div className={classes.educationContent}>
                  <span style={{ fontWeight: "bold" }}>Course Name</span>
                  <br />
                  <span style={{ fontWeight: "bocld" }}>Institute name</span>
                  <br />
                  <span style={{}}>Time</span>
                  <br />
                  <span style={{}}>Percentage</span>
                </div>
                <div className={classes.newDelete}>
                  <IconButton>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className={classes.contentRight}>
              <div className={classes.jobHeader}>
                <div className={classes.jobContent}>
                  <span style={{ fontWeight: "bold" }}>Job name</span>
                  <br />
                  <span>Time Duration</span>
                  <br />
                  <span>Description of Job</span>
                </div>
                <div className={classes.newDelete}>
                  <IconButton>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className={classes.contentRight}>
              <div className={classes.internshipHeader}>
                <div className={classes.internshipContent}>
                  <span style={{ fontWeight: "bold" }}>Profile</span>
                  <br />
                  <span>Organinsation</span>
                  <br />
                  <span>Time Duration</span>
                  <br />
                  <span>Description</span>
                </div>
                <div className={classes.newDelete}>
                  <IconButton>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className={classes.contentRight}>
              <div className={classes.trainingHeader}>
                <div className={classes.trainingContent}>
                  <span style={{ fontWeight: "bold" }}>Field</span>
                  <br />
                  <span>Organisation</span>
                  <br />
                  <span>Time</span>
                  <br />
                  <span>Description</span>
                </div>
                <div className={classes.newDelete}>
                  <IconButton>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className={classes.contentRight}>
              <div className={classes.projectHeader}>
                <div className={classes.projectContent}>
                  <span style={{ fontWeight: "bold" }}>Project name</span>
                  <br />
                  <span>Time</span>
                  <br />
                  <span>Description</span>
                </div>
                <div className={classes.newDelete}>
                  <IconButton>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className={classes.contentRight}>
              <div>
                Indivisual skill
                <IconButton>
                  <AddIcon></AddIcon>
                </IconButton>
              </div>
              {/* <div className={classes.newDelete}>
                                
                        </div> */}
            </div>
            <div className={classes.contentRight}>
              <div className={classes.linkHeader}>
                <div className="linkHeader">
                  <span>Portfolio Link</span>
                  <br />
                  <Link>link</Link>
                </div>
                <div className={classes.newDelete}>
                  <IconButton>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className={classes.contentRight}>
              <div className={classes.achievementHeader}>
                <div className={classes.achievementContent}>
                  <span>Achievement</span>
                  <br />
                  <span>Description</span>
                </div>
                <div className={classes.newDelete}>
                  <IconButton>
                    <AddIcon></AddIcon>
                  </IconButton>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </div>
  );
}
