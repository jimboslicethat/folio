/* eslint-disable jsx-a11y/anchor-is-valid */

import { BookReader, CodeBlock, Home } from '@styled-icons/boxicons-regular'
import { UserAccount } from '@styled-icons/boxicons-solid'
import Link from 'next/link'
import React from 'react'

import styles from '../../styles/components/navbar.module.css'

export default function NavBar(): React.ReactElement {
  const internalLinks = [
    { href: '/', icon: <Home size="40" />, title: 'Go home' },
    { href: '/projects', icon: <CodeBlock size="40" />, title: 'See my projects' },
    { href: '/blog', icon: <BookReader size="40" />, title: 'View blog' },
    { href: '/bio', icon: <UserAccount size="40" />, title: 'See bio' }
  ]

  return (
    <nav className={styles.container}>
      {internalLinks.map(link => (
        <Link key={link.href} href={link.href} passHref>
          <a title={link.title} className={styles.link}>
            {link.icon}
          </a>
        </Link>
      ))}
    </nav>
  )
}
