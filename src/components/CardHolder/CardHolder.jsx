import React from "react";
import Card from "../card/Card";
import { useState, useEffect } from "react";
import { fetchBooks } from "../../functions/helpers";
import styles from "./CardHolder.module.scss";
import coverPlaceHolder from "../../assets/book-cover-placeholder.png";

const CardHolder = ({ query = "" }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  let booksdata = [];

  useEffect(() => {
    setLoading(true);

    fetchBooks(query) //add a .then cleanData() to handle the ternary logic in the return
      .then((response) => {
        if (!response) {
          console.log("could not fetch data");
          return;
        }

        booksdata = response;
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setBooks(booksdata);

        setLoading(false);
      });
  }, [query]);

  const sortedBooks = [...books].sort((a, b) => (a.title > b.title ? 1 : -1));
  console.log(sortedBooks);

  return (
    <>
      <div className={styles.CardHolder}>
        {loading ? (
          <p>Loading...</p>
        ) : sortedBooks.length === 0 ? (
          <p>No results.</p>
        ) : (
          //didn't realise that this is the div that takes the flexwrap
          <div className={styles.CardHolder_loaded}>
            {sortedBooks.map((book, index) => (
              <Card
                key={index}
                title={
                  book.volumeInfo.title
                    ? book.volumeInfo.title
                    : "No title Available"
                }
                author={
                  //this is an array, so this just works
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "No Authors Found"
                }
                description={
                  book.volumeInfo.description
                    ? book.volumeInfo.description
                    : "No description available"
                }
                image={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : coverPlaceHolder
                }
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardHolder;
