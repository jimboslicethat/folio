/* eslint-disable jsx-a11y/anchor-is-valid */

import { Icon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BiUserCircle, BiBookContent, BiCodeBlock, BiHomeAlt } from 'react-icons/bi'

import styles from '../../styles/components/navbar.module.css'

export default function NavBar(): React.ReactElement {
  const internalLinks = [
    { href: '/', icon: <Icon as={BiHomeAlt} boxSize="40" />, title: 'Go home' },
    { href: '/projects', icon: <Icon as={BiCodeBlock} boxSize="40" />, title: 'See my projects' },
    { href: '/blog', icon: <Icon as={BiBookContent} boxSize="40" />, title: 'View blog' },
    { href: '/bio', icon: <Icon as={BiUserCircle} boxSize="40" />, title: 'See bio' }
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
