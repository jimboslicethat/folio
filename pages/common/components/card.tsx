import React from 'react'

import styles from './card.module.css'

type CardProps = {
  title: string
  href: string
  description: string
}

export default function Card({ href, title, description }: CardProps) {
  return (
    <a target="_blank" href={href} className={styles.card}>
      <h3 className={styles.title}>{title} &rarr;</h3>
      <p className={styles.description}>{description}</p>
    </a>
  )
}