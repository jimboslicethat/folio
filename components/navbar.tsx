/* eslint-disable jsx-a11y/anchor-is-valid */

import { Tooltip } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import HomeIcon from '@material-ui/icons/Home'
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import Link from 'next/link'
import React from 'react'

import styles from '../styles/components/navbar.module.css'

export default function NavBar(): React.ReactElement {
  const internalLinks = [
    {
      href: '/',
      content: (
        <Tooltip title="Go Home" placement="bottom" arrow>
          <HomeIcon aria-label="Go Home" fontSize="large" />
        </Tooltip>
      )
    },
    {
      href: '/blog',
      content: (
        <Tooltip title="Go to Blog" placement="bottom" arrow>
          <LibraryBooksRoundedIcon aria-label="Go to Blog" fontSize="large" />
        </Tooltip>
      )
    }
  ]
  const externalLinks = [
    {
      href: 'https://github.com/jimboslicethat',
      content: (
        <Tooltip title="See my Github" placement="bottom" arrow>
          <GitHubIcon aria-label="See my Github" fontSize="large" />
        </Tooltip>
      )
    },
    {
      href: 'https://www.linkedin.com/in/jamesandersonwalsh/',
      content: (
        <Tooltip title="See my LinkedIn" placement="bottom" arrow>
          <LinkedInIcon aria-label="See my LinkedIn" fontSize="large" />
        </Tooltip>
      )
    },
    {
      href: 'https://twitter.com/jimboslicethat',
      content: (
        <Tooltip title="See my Twitter" placement="bottom" arrow>
          <TwitterIcon aria-label="See my Twitter" fontSize="large" />
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
