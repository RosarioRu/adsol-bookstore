import React from "react";
import "./../../src/index.css";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Footer() {

  const footerStyles = {
    backgroundColor:"white",
    position: "fixed",
    bottom: "0",
    width: "100%",
    height: "1.5rem",
    borderTop: "0.5px solid grey"
  }

  return (
    <React.Fragment>
      <Navbar className="navbar navbar-custom-header-and-footer py-0" style={footerStyles}>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link">Home</Link>
            <Link to="/cart" class="nav-item nav-link">Cart</Link>
            <Link to="/sign-in" class="nav-item nav-link" href="#">Account log in</Link>
          </div>
        </div>
      </Navbar>
      {/* <div style={footerStyles}>
        <h1>Info footer</h1>
      </div> */}
    </React.Fragment>
  );
}
export default Footer;