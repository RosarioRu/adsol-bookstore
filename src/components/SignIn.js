import React from "react";

function SignIn() {

  //these and the cart styles (+homepage) might be best combined within a div that wraps around all three in the app.js file
  const signInStyles={
    width: "80%",
    float: "center",
    margin: "auto",
    paddingTop: "8%",
    backgroundColor: "rgb(220, 228, 220)",
    height: "100vh",
  }

  return (
    <div style={signInStyles}>
      <p>Placeholder for sign-in component</p>
    </div>
  );
}

export default SignIn;