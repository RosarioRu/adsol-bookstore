import React from "react";
import BestSellers from "./BestSellers";
import StaffPicks from "./StaffPicks";
import Events from "./Events";
// import storefrontImage from './../img/storefront.jpg';
import storefront2Image from './../img/storefront2.png';

function HomePage() {

  const homeStyles = {
    // border:"1px solid black",
    width: "80%",
    margin: "auto",
    marginBottom: "0px",

    mainPictureStyles: {
      // border: "2px solid orange",
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%",
      opacity: "0.85"
      
      
    }

    // paddingTop: "8%",
  }

  return (
    <React.Fragment>
      <div style={homeStyles}>
        <img class="" src={storefront2Image} alt="photograph of bookstore storefront" style={homeStyles.mainPictureStyles}></img>
        <h1>Home page placeholder</h1>
        <BestSellers />
        <StaffPicks />
        <Events />
      </div>
    </React.Fragment>
  );
}

export default HomePage;