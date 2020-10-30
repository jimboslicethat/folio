import React from 'react'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'

import styles from '../../../styles/common/components/navbar.module.css'

export default function NavBar(): React.ReactElement {
  return (
    <nav className={styles.container}>
      <Link href="/" passHref>
        <a className={styles.link} href="/" rel="no-referrer">
          <HomeIcon fontSize="large" />
        </a>
      </Link>
      <Link href="/blog-posts" passHref>
        <span className={styles.link}>Blog</span>
      </Link>
      {/* <Link href="/top-projects" passHref>
        Projects
      </Link> */}
      <Link href="/links" passHref>
        <span className={styles.link}>Links</span>
      </Link>
    </nav>
  )
}
