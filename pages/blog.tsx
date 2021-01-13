import React from 'react'
import useSWR from 'swr'

import Footer from '../components/footer'
import NavBar from '../components/navbar'
import styles from '../styles/pages/blog.module.css'

export default function BlogPosts(): React.ReactElement {
  const { data } = useSWR('/api/posts', () => fetch('/api/posts').then(_ => _.json()))
  // eslint-disable-next-line no-console
  console.log(data)

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
