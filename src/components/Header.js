import React from "react";
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoBookstoreImage from './../img/logoBookstore.jpg';
import "./../../src/index.css";


function Header() {

  const logoStyles = {
    marginLeft: "4%",
  }

    
  return (
    <React.Fragment>
      <Navbar className="navbar navbar-custom-header position-top py-0">
        <div class="logo">
            <img class="navbar-brand" src={logoBookstoreImage} width="50" alt="logo for bookstore, black and white pic of books" style={logoStyles}></img>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
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