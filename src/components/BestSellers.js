import React from "react";

function BestSellers() {

  const bestSellersStyles = {
    border: "2px solid green"
  }

    
  return (
    <React.Fragment>
      <div style={bestSellersStyles}>
        <p>Placeholder for Bestsellers!</p>
      </div>
    </React.Fragment>
);


}
export default BestSellers;

///
import React, { useState, useEffect } from 'react';


function BestSellers() {

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
          setBestSellers(jsonifiedResponse.results)
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
              <h3>{book.title}</h3>
              {/* <p>{book.author}</p> */}
            </li>
          )}
        </ul>
      </React.Fragment>
    );
  }


}


export default BestSellers;