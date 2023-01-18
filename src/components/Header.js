import React from "react";
import { Link } from "react-router-dom";


function Header() {

  const headerStyles = {
    border: "1px solid black",
    width: "80%",
    margin: "auto",
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
);


}
export default Header;