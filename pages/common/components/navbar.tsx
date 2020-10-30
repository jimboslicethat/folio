import React from 'react'
import Link from 'next/link'

import styles from '../../../styles/common/components/navbar.module.css'

export default function NavBar(): React.ReactElement {
  return (
    <nav className={styles.container}>
      <Link href="/blog-posts" passHref>
        Blog
      </Link>
      <Link href="/top-projects" passHref>
        Projects
      </Link>
      <Link href="/links" passHref>
        Links
      </Link>
    </nav>
  )
}
