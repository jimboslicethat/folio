import React from 'react'
import Footer from './common/_footer'

import NavBar from './common/_navbar'
import styles from '../styles/blog-posts.module.css'

export default function BlogPosts(): React.ReactElement {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <article>
          <iframe
            className={styles.blogPost}
            src="https://dev.to/jimboslicethat/from-bootcamp-to-college-43on"
            title="From Bootcamp to College"
          />
        </article>
        <article>
          <iframe
            className={styles.blogPost}
            src="https://dev.to/jimboslicethat/the-mac-guy-guide-to-windows-development-4m5c"
            title="The Mac Guy Guide to Windows Development"
          />
        </article>
      </main>
      <Footer />
    </>
  )
}
