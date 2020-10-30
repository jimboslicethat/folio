import React from 'react'

import styles from './card.module.css'

type CardProps = {
  title: string
  href: string
  description: string
  icon?: any
}

export default function Card({ href, title, description, icon }: CardProps) {
  return (
    <section className={styles.card}>
      <a target="_blank" href={href}>
        <div className={styles.cardHeader}>
          {icon}
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </a>
    </section>
  )
}
