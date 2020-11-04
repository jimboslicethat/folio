/* eslint-disable jsx-a11y/anchor-is-valid */

import HomeIcon from '@material-ui/icons/Home'
import Link from 'next/link'
import React from 'react'

import styles from '../../styles/common/_navbar.module.css'

export default function NavBar(): React.ReactElement {
  const links = [
    { href: '/', content: <HomeIcon fontSize="large" /> },
    { href: 'about-me', content: 'About' },
    { href: '/blog-posts', content: 'Blog' },
    { href: 'links', content: 'Links' }
  ]

  return (
    <nav className={styles.container}>
      {links.map(link => (
        <Link key={link.href} href={link.href} passHref>
          <a className={styles.link} rel="no-referrer">
            {link.content}
          </a>
        </Link>
      ))}
    </nav>
  )
}
