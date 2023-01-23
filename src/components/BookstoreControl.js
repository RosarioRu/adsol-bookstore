import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import db from './../firebase.js'

function BookstoreControl() {
  
  const [cartVisible, setCartVisible] = useState(false);
  const [allBooksInventory, setAllBooksInventory] = useState([]);
  const [inventoryDisplayed, setInventoryDisplayed] = useState(false);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "books"),
      (collectionSnapshot) => {
        const books = [];
        collectionSnapshot.forEach((doc) => {
          books.push({
            id: doc.id,
            title: doc.data().title,
            author: doc.data().author,
            description: doc.data().description,
            isbn: doc.data().isbn,
          });
        });

      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);

  // what is displayed:

  let currentlyVisibleState=null;

  if(error) {
    currentlyVisibleState = <p>Error: {error}</p>
  } 
  else if (inventoryDisplayed) {
    currentlyVisibleState = 
      <Inventory
        inventory={allBooksInventory} />;
  } 
  else if (cartVisible === false) {
    currentlyVisibleState = <HomePage />
  }

  return(
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );

}

export default BookstoreControl;