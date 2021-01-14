/* eslint-disable jsx-a11y/anchor-is-valid */

import { Tooltip } from '@material-ui/core'
import { Blogger, Github, LinkedinSquare, Twitter } from '@styled-icons/boxicons-logos'
import { Home } from '@styled-icons/boxicons-regular'
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
      href: '/blog',
      content: (
        <Tooltip title="Go to Blog" placement="bottom" arrow>
          <Blogger size="40" />
        </Tooltip>
      )
    }
  ]
  const externalLinks = [
    {
      href: 'https://github.com/jimboslicethat',
      content: (
        <Tooltip title="See my Github" placement="bottom" arrow>
          <Github size="40" />
        </Tooltip>
      )
    },
    {
      href: 'https://www.linkedin.com/in/jamesandersonwalsh/',
      content: (
        <Tooltip title="See my LinkedIn" placement="bottom" arrow>
          <LinkedinSquare size="40" />
        </Tooltip>
      )
    },
    {
      href: 'https://twitter.com/jimboslicethat',
      content: (
        <Tooltip title="See my Twitter" placement="bottom" arrow>
          <Twitter size="40" />
        </Tooltip>
      )
    }
  ]

  return (
    <nav className={styles.container}>
      <div>
        {internalLinks.map(link => (
          <Link key={link.href} href={link.href} passHref>
            <a className={styles.link} rel="no-referrer">
              {link.content}
            </a>
          </Link>
        ))}
      </div>
      <div>
        {externalLinks.map(link => (
          <a
            className={styles.link}
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.content}
          </a>
        ))}
      </div>
    </nav>
  )
}
