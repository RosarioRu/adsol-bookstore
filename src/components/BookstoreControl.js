import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Inventory from "./Inventory";
import AddBookFom from "./AddBookForm";
import { collection, addDoc, onSnapshot, doc, deleteDoc, query, where, getDocs } from "firebase/firestore";
import db from './../firebase.js'

function BookstoreControl() {
  
  const [addBookFormVisible, setAddBookFormVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [allBooksInventory, setAllBooksInventory] = useState([]);
  const [inventoryDisplayed, setInventoryDisplayed] = useState(false);
  const [error, setError] = useState(null);

//useEffect funtions below update content on webpage: 

//this one sets the content of 'db' to a list of books objs with id/title/auth/desc/isbn from db data
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
          setAllBooksInventory(books);
        });

      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);


  const handleSeeInventoryClick= () => {
    setInventoryDisplayed(true);
  }


  //functions below interact with firestore database:

  //onAddingBooks triggers this func from AddBookFom component
  const handleAddingNewBookToInventory = async (newBookData) =>
  {
    //some code here to check if isbn already exists in db
    await addDoc(collection(db, "books"), newBookData);
    setAddBookFormVisible(false);
  }



  // what is displayed:

  let currentlyVisibleState=null;

  if (error != null) {
    currentlyVisibleState = <p>Error: {error}</p>
  } 
  else if (addBookFormVisible) {
    currentlyVisibleState = 
      <AddBookFom 
        onAddingBooks={handleAddingNewBookToInventory}
      />
  }
  else if (inventoryDisplayed) {
    currentlyVisibleState = 
      <Inventory
        inventory={allBooksInventory}
      />;
  } 
  else 
  {
    currentlyVisibleState = 
      <HomePage 
        onClickingSeeInventory={handleSeeInventoryClick}
      />
  }

  return(
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  );

}

export default BookstoreControl;