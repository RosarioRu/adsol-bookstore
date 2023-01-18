import React from "react";


function Footer() {

  const footerStyles = {
    border:"1px solid black",
    width: "80%",
    margin: "auto",
    marginBottom: "0px",
  }

  return (
    <React.Fragment>
      <div style={footerStyles}>
        <h1>Info footer</h1>
      </div>
    </React.Fragment>
);


}
export default Footer;