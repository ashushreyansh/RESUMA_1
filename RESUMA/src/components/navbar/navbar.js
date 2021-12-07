import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
//import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  appbar: {
    background: "none",
    position: "absolute",
    backgroundColor: "#6f42c1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    color: "#000",
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
    // color: '#427ad4',
    color: "#fff",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#000",
    fontSize: "4.5rem",
  },
  goDown: {
    // color: '#427ad4',
    color: "#6f42c1",
    fontSize: "4rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const logoutUser = async (e) => {
    e.preventDefault();
    await dispatch(logout());
  };

  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            RE<span className={classes.colorText}>SUMA</span>
          </h1>
          <IconButton>
            <InfoIcon className={classes.icon} />
            <span className={classes.text}>About Us</span>
          </IconButton>
          {auth.authenticated ? (
            <>
              <IconButton onClick={(e) => logoutUser(e)}>
                <LoginIcon className={classes.icon} />
                <span className={classes.text}>Logout</span>
              </IconButton>
              <Link to="/profile">
                <IconButton>
                  <PersonOutlineIcon className={classes.icon} />
                  <span className={classes.text}>Profile</span>
                </IconButton>
              </Link>
            </>
          ) : (
            <>
              <IconButton href="/login">
                <LoginIcon className={classes.icon} />
                <span className={classes.text}>Login</span>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
