import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

function BestSellers() {

  const bestSellersStyles = {
    border: "2px solid green",

    bookCoverStyles : {
      width: "329",
      height: "500"
    },
                
  }


  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
          } else {
            return response.json()
          }
        })
      .then((jsonifiedResponse) => {
          setBestSellers(jsonifiedResponse.results.books)
          setIsLoaded(true)
        })
      .catch((error) => {
        setError(error.message)
        setIsLoaded(true)
      });
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Best Sellers Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <h1>Best Sellers</h1>
        <ul>
          {bestSellers.map((book, index) =>
            <li key={index}>
              {/* <h3>{book.title}</h3>
              <h3>{book.author}</h3> */}
              <img style={bestSellersStyles.bookCoverStyles} src={book.book_image}></img>
              {/* <img style={bestSellersStyles.bookCoverStyles} src="url({book.book_image})">{book.book_image}</img> */}
              
            </li>
          )}
        </ul>
        <Container>
          <Row>
            <Col>
              <Card>card1</Card>
              <Card>card2</Card>
            </Col>
          </Row>
        </Container>

        
      </React.Fragment>
    );
  }
    
//   return (
//     <React.Fragment>
//       <div style={bestSellersStyles}>
//         <p>Placeholder for Bestsellers!</p>
//       </div>
//     </React.Fragment>
// );


}
export default BestSellers;

