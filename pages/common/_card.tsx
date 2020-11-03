import React from 'react'

import styles from '../../styles/common/_card.module.css'

type CardProps = {
  title: string
  href: string
  description: string
  icon: React.ReactElement | null
}

export default function Card({ href, title, description, icon }: CardProps): React.ReactElement {
  return (
    <section className={styles.card}>
      <a target="_blank" rel="noreferrer" href={href}>
        <div className={styles.cardHeader}>
          {icon}
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.description}>{description}</p>
      </a>
    </section>
  )
}
