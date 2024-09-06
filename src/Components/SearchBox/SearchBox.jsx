import React from 'react'
import { IoSearch } from "react-icons/io5";
import styles from "./SearchBox.module.css"

export default function SearchBox({search, setSearch , serachHandler}) {
  return (
    <div className={styles.search}>
        <input type="text" placeholder='Search ...' value={search} onChange={e=>setSearch(e.target.value.toLowerCase().trim())}/>
        <button onClick={serachHandler}><IoSearch /></button>
    </div>
  )
}
