import React from "react";

function Events() {

  const eventsStyles = {
    // border: "2px solid yellow",
    backgroundColor: "rgb(229, 234, 229)",
    border: "1px solid #cdd0d2",
    boxShadow: "5px -5px 5px 0px #cdd0d2",
    width: "70%",
    margin: "3%",
    padding: "2%",
  }

    
  return (
    <React.Fragment>
      <div style={eventsStyles}>
        <p>Placeholder for events</p>
        <p> January Readings:</p>
      </div>
    </React.Fragment>
  );

}

export default Events;