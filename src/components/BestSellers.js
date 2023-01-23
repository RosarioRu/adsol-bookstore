import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container, CardGroup } from "react-bootstrap";

function BestSellers() {

  const bestSellersStyles = {
    border: "2px solid green",

    bestSellersBookshelfStyles : {
      padding: "1%",
      paddingTop: "0.5%",
      width: "50%",
      backgroundColor: "rgb(229, 234, 229)",
      marginBottom: "3%",
      marginTop: "3%",
      marginLeft: "1%", 
      marginRight: "0.5%",
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
        
        <div style={bestSellersStyles.bestSellersBookshelfStyles} className="headings">
        <h4 style={{fontSize: "large"}}>NYT Best Sellers</h4>
        <Container>
          <Row>
            <Col>
              <CardGroup>
                {bestSellers.slice(0,5).map((book, index) =>
                  <Card key={index}>
                    <img style={bestSellersStyles.bookCoverStyles} src={book.book_image} alt="Book cover images of the current top 5 NYT bestsellers"></img>
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
    
//   return (
//     <React.Fragment>
//       <div style={bestSellersStyles}>
//         <p>Placeholder for Bestsellers!</p>
//       </div>
//     </React.Fragment>
// );


}
export default BestSellers;

