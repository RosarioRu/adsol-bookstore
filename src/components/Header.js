import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {

  const headerStyles = {
    border: "1px solid black",
    // width: "80%",
    // float: "center",
    // margin: "auto",
  }

  return (
    <React.Fragment>
      <Navbar className="navbar fixed-top navbar-light bg-light py-0" style={headerStyles}>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {/* <span class="navbar-text">Bookstore</span> */}
            <Link to="/" class="nav-item nav-link">Home</Link>
            <Link to="/cart" class="nav-item nav-link">Cart</Link>
            <Link to="/sign-in" class="nav-item nav-link" href="#">Account log in</Link>
          </div>
        </div>
      </Navbar>
    </React.Fragment>
);


}
export default Header;