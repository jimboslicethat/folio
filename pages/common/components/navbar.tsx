import React from 'react'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'

import styles from '../../../styles/common/components/navbar.module.css'

export default function NavBar(): React.ReactElement {
  return (
    <nav className={styles.container}>
      <Link href="/" passHref>
        <a href="/" rel="no-referrer">
          <HomeIcon fontSize="large" />
        </a>
      </Link>
      <Link href="/blog-posts" passHref>
        Blog
      </Link>
      {/* <Link href="/top-projects" passHref>
        Projects
      </Link> */}
      <Link href="/links" passHref>
        Links
      </Link>
    </nav>
  )
}
