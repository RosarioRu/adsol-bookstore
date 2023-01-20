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
    // backgroundColor: "#e4dfd4",
    // backgroundColor: "#F5F2ED",
    // backgroundColor: "rgb(220, 228, 220)",

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
        
          <div class="headings">
            <h3>Portland Bookstore</h3>      
            {/* <p><em>Portland's cozy reading nook since 2004</em></p>             */}
          </div>
        
        <BestSellers />
        <StaffPicks />
        <Events />
      </div>
    </React.Fragment>
  );
}

export default HomePage;