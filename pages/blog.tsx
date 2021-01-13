import React from 'react'

import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styles from '../styles/pages/blog.module.css'

export default function BlogPosts(): React.ReactElement {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <h2>Under construction!</h2>
      </main>
      <Footer />
    </>
  )
}
