import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <Tooltip title="Anne Quinkenstein">
        <IconButton>
          <a
            className="logo-img"
            href="https://www.linkedin.com/in/anne-quinkenstein/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 0.5 }}
          >
            <img src="/images/logo.png" alt="logo AQ" />{" "}
          </a>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Footer;
