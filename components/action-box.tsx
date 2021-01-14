import Link from 'next/link'
import React from 'react'

import styles from '../styles/components/action-box.module.css'

interface Props {
  icon: React.ReactNode
  text: string
  href: string
}

export default function ActionBox({ icon, text, href }: Props): React.ReactElement {
  return (
    <section className={styles.container}>
      {icon}
      <h2>
        <Link href={href}>{text}</Link>
        &nbsp;&#10132;&nbsp;
      </h2>
    </section>
  )
}
