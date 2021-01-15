/* eslint-disable jsx-a11y/anchor-is-valid */

import { Tooltip } from '@material-ui/core'
import { Blogger } from '@styled-icons/boxicons-logos'
import { CodeBlock, Home, InfoCircle } from '@styled-icons/boxicons-regular'
import Link from 'next/link'
import React from 'react'

import styles from '../styles/components/navbar.module.css'

export default function NavBar(): React.ReactElement {
  const internalLinks = [
    {
      href: '/',
      content: (
        <Tooltip title="Go Home" placement="bottom" arrow>
          <Home size="40" />
        </Tooltip>
      )
    },
    {
      href: '/projects',
      content: (
        <Tooltip title="See projects" placement="bottom" arrow>
          <CodeBlock size="40" />
        </Tooltip>
      )
    },
    {
      href: '/blog',
      content: (
        <Tooltip title="Go to Blog" placement="bottom" arrow>
          <Blogger size="40" />
        </Tooltip>
      )
    },
    {
      href: '/bio',
      content: (
        <Tooltip title="Read bio" placement="bottom" arrow>
          <InfoCircle size="40" />
        </Tooltip>
      )
    }
  ]

  return (
    <nav className={styles.container}>
      {internalLinks.map(link => (
        <Link key={link.href} href={link.href} passHref>
          <a className={styles.link}>{link.content}</a>
        </Link>
      ))}
    </nav>
  )
}
