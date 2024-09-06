import React from 'react'
import styles from "./SideCard.module.css"

export default function SideCard({data : {image , title}}) {
  return (
    <div className={styles.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </div>
  )
}
