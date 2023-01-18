import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {

  const headerStyles = {
    border: "1px solid black",
    width: "80%",
    margin: "auto",
  }

  return (
    <React.Fragment>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
      <a class="nav-item nav-link active"><Link to="/cart">Cart</Link></a>

      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>

      <div style={headerStyles}>
        <h1>Bookstore Header</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/sign-in">Account log in</Link>
          </li>
        </ul>
      </div>

    
      </nav>
    </React.Fragment>
);


}
export default Header;