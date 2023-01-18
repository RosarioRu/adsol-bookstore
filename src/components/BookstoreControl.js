import React, { useState } from "react";
import HomePage from "./HomePage";

function BookstoreControl() {



  const [cartVisible, setCartVisible] = useState(false);

  let currentlyVisibleState=null;
  
  if (cartVisible === false) {
    currentlyVisibleState = <HomePage />
  }

  return(
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );

}

export default BookstoreControl;