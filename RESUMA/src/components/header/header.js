import React, { useEffect, useState } from "react";
import { IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from "react-scroll";
import "./HeaderStyles.css";

export default function Header() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      <div className="rootHeader" id="header">
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1500 } : {})}
          collapsedheight={50}
        >
          <div className="container">
            <h1 className="title">
              Start Making <br />
              your
              <span>
                {" "}
                RE<span style={{ color: "#6f42c1" }}>SUME</span>
              </span>
            </h1>
            <Scroll to="card" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className="goDown" />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>
    </>
  );
}
