import React from "react";
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoBookstoreImage from './../img/logoBookstore.jpg';
import "./../../src/index.css";
import PropTypes from "prop-types";


function Header(props) {

  const logoStyles = {
    marginLeft: "4%",

    storeName: {
      fontSize: "x-large",
    },

  }

    
  return (
    <React.Fragment>
      <Navbar className="navbar navbar-custom-header-and-footer position-top py-0">
        <div class="logo">
            <img class="navbar-brand" src={logoBookstoreImage} width="50" alt="logo for bookstore, black and white pic of books" style={logoStyles}></img> 
        </div>
        <p class="headings" style={logoStyles.storeName}>Portland Bookstore</p>  
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-item nav-link">Home</Link>
            <Link to="/cart" class="nav-item nav-link">Cart</Link>
            <Link to="/sign-in" class="nav-item nav-link" href="#">Account log in</Link>
            <button onClick={()=>props.onClickingSeeInventory}>All Books</button>
          </div>
        </div>
      </Navbar>  
    </React.Fragment>
  );
}

Header.propTypes = {
  onClickingSeeInventory: PropTypes.func,
};

export default Header;