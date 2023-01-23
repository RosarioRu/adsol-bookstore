import React from "react";
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";


function StaffPicks() {

  const staffPicksStyles = {
    border: "2px solid purple", 

    staffPicksBookshelfStyles : {
      padding: "1%",
      paddingTop: "0.5%",
      width: "50%",
      // backgroundColor: "rgb(229, 234, 229)",
      backgroundColor: "#e4dfd4",
      background: "linear-gradient(#cdd0d2, RGB(234, 229, 234))",

      marginBottom: "3%",
      marginTop: "3%",
      marginLeft: "0.5%",
      marginRight: "1%",
      
    },
  }

  //placeholder data that will eventually be pulled from firebase firestore
  const staffPicks = [{"title": "FAIRY TALE", "author": "Stephen King", "book_image": "https://storage.googleapis.com/du-prd/books/images/9781668002179.jpg", "description": "A high school kid inherits a shed that is a portal to another world where good and evil are at war."}, {"title": "WITHOUT A TRACE",
  "author": "Danielle Steel","book_image": "https://storage.googleapis.com/du-prd/books/images/9781984821867.jpg","description": "Charles Vincent meets someone who ignites his passion and must decide whether to walk away from his perfect-from-the-outside life."}, {"title":"title goes here", "author":"author goes here", "book_image":"https://storage.googleapis.com/du-prd/books/images/9780778333111.jpg", "description":"description goes here"}, {"title":"title goes here", "author":"author goes here", "book_image":"https://storage.googleapis.com/du-prd/books/images/9780778333111.jpg", "description":"description goes here"}, {"title":"title goes here", "author":"author goes here", "book_image":"https://storage.googleapis.com/du-prd/books/images/9780778333111.jpg","description":"description goes here"}];

    
  return (
    <React.Fragment>  
      <div style={staffPicksStyles.staffPicksBookshelfStyles} className="headings">
      <h4 style={{fontSize: "large"}}>Staff Picks</h4>
      <Container>
        <Row>
          <Col>
            <CardGroup>
              {staffPicks.map((book, index) =>
                <Card key={index}>
                  <img style={staffPicksStyles.bookCoverStyles} src={book.book_image} alt="book cover"></img>
                </Card>
              )}
            </CardGroup>
          </Col>
        </Row>
      </Container>
      </div>
    </React.Fragment>
  );

}

export default StaffPicks;