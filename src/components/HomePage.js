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
    backgroundColor: "#dce4dc",

    mainPictureStyles: {
      // border: "2px solid orange",
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%",
      opacity: "0.85", 
    }, 

    recommendationsStyles: {
      display: "flex",
      flexDirection: "row", 
      paddingRight: "3%",
    },
  }

  return (
    <React.Fragment>
      <div style={homeStyles}>
        <img class="" src={storefront2Image} alt="photograph of bookstore storefront" style={homeStyles.mainPictureStyles}></img>
        <div class="headings">
          <h3 style={{fontSize: "x-large"}}>Portland Bookstore</h3>      
        </div>
        <div style={homeStyles.recommendationsStyles}>
          <BestSellers />
          <StaffPicks />
        </div>
        <Events />
      </div>
    </React.Fragment>
  );
}

export default HomePage;