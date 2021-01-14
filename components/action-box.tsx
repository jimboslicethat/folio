import React from 'react'

import styles from '../styles/components/action-box.module.css'

interface Props {
  icon: React.ReactNode
  text: string
}

export default function ActionBox({ icon, text }: Props): React.ReactElement {
  return (
    <section className={styles.container}>
      {icon}
      <h2>
        {text}
        &nbsp;&#10132;&nbsp;
      </h2>
    </section>
  )
}
