import React from 'react'
import styles from "./Layout.module.css"

export default function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p>
                <a href="#">JEFF</a> | React.js WebSite
            </p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed By Jafar With ❤️</p>
        </footer>
    </>
  )
}
