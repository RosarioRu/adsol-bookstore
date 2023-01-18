import React from "react";


function Header() {

  const headerStyles = {
    border: "1px solid black",
    width: "90%",
    align: "center"
  }

  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Bookstore Header</h1>
      </div>
    </React.Fragment>
);


}
export default Header;