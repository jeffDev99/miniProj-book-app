import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./BookCard.module.css";

export default function BookCard({ data, handleLikedList }) {
  const [like, setLike] = useState(false);
  const { title, author, image, language, pages } = data;
  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };
  
  return (
    <figure className={styles.card}>
      <img src={image} alt={title} />
      <figcaption className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </figcaption>
      <button onClick={likeHandler}>
        <FaHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </figure>
  );
}
