import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="container">
      <div className="footer">
        <p>
          <a href="https://github.com/crabdul" target="_blank">
            Github: crabdul
          </a>{" "}
          /{" "}
          <a href="mailto:karim.elkhazaani@zoho.com" target="_blank">
            Email
          </a>
          /{" "}
          <a href="https://www.linkedin.com/in/el-khazaani/" target="_blank">
            LinkedIn
          </a>
        </p>
        <p>
          Copyright <small>{date}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
