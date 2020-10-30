import React from 'react'
import Image from 'next/image'

import styles from './card.module.css'

type CardProps = {
  title: string
  href: string
  description: string
  imageUrl?: string
}

export default function Card({ href, title, description, imageUrl }: CardProps) {
  return (
    <section className={styles.card}>
      {imageUrl ? (
        <Image src={imageUrl} alt={`Logo for ${title}`} width="36rem" height="36rem" />
      ) : null}
      <a target="_blank" href={href}>
        <h3 className={styles.title}>{title} &rarr;</h3>
        <p className={styles.description}>{description}</p>
      </a>
    </section>
  )
}
