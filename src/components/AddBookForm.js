import React from "react";
import PropTypes from "prop-types";

function AddBookForm(props) {

  function handleAddBookFormSubmission(event) 
    {
      event.preventDefault();
      props.onAddingBooks({
        title: event.target.title.value,
        author: event.target.author.value,
        // summary: event.target.summary.value,
        isbn: event.target.isbn.value,
      });
    }


  return (
    // <React.Fragment>
    //   <h3>Form for adding a book to Inventory goes here</h3> 
    //   <p>Form should have a formSubmissionHandler={handleAddBookFormSubmission} and a button</p>
    // </React.Fragment>
    <React.Fragment>
      <form onSubmit={handleAddBookFormSubmission}>
        <input required
          type='text'
          name='title'
          placeholder='Book title' 
        />
        <input required
          type="text"
          name="author"
          placeholder="Author"
        />
        <input required
          name="isbn"
          placeholder="isbn"
        />
        <button type="submit">Add Book</button>
      </form>
    </React.Fragment>
  );
}

AddBookForm.propTypes = {
  onAddingBooks: PropTypes.func, //passed down from control
};

export default AddBookForm;