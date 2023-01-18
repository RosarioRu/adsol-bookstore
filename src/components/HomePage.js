import React from "react";

function HomePage() {

  const homeStyles = {
    border:"1px solid black",
    width: "80%",
    margin: "auto",
    marginBottom: "0px",
    paddingTop: "8%",
  }

  return (
    <React.Fragment>
      <div style={homeStyles}>
        <h1>Home page placeholder</h1>
        <p>Best Sellers here</p>
        <p>Staff Picks here</p>
        <p>Events here</p>
      </div>
    </React.Fragment>
  );
}

export default HomePage;