import React, { useState } from "react";
import { books as bookData } from "../../constants/mockData";
import BookCard from "../BookCard/BookCard";
import SideCard from "../SideCard/SideCard";
import styles from "./Books.module.css";
import SearchBox from "../SearchBox/SearchBox";

export default function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");

  const handleLikedList = (book, status) => {
    //  delete book from list
    if (status) {
      const newLiekdList = liked.filter((item) => item.id !== book.id);
      setLiked(newLiekdList);
    } // add book to list
    else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const serachHandler = ()=>{
    if (search) {
      const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search))
      setBooks(newBooks)
    }else{
      setBooks(bookData)
    }
  }
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} serachHandler={serachHandler}/>
      <div className={styles.booksWrapper}>
        <div className={styles.cards}>
          {books.map((item) => (
            <BookCard key={item.id} data={item} handleLikedList={handleLikedList} />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((item) => (
              <SideCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
