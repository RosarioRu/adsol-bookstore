import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";


function Inventory(props) {

  return(
    <React.Fragment>
      <h1>All Books in Bookstore</h1>
      <hr/>
      {Object.values(props.inventory).map( (book) => 
        <Book
          title={book.title}
          author={book.author}
          // summary={book.summary}
          // key={book.id}
          // id={book.id}
        />
      )};
    </React.Fragment>
  )
}

Inventory.propTypes = {
  inventory: PropTypes.array,
};

export default Inventory;