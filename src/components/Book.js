import React from "react";
import PropTypes from "prop-types";

function Book(props) {
  return(
    <React.Fragment>
      <p>Title: {props.title}</p>
      <p><em>Author: {props.author}</em></p>
      {/* <p>ISBN: {props.isbn}</p> */}
    </React.Fragment>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  isbn: PropTypes.string,
};

export default Book;