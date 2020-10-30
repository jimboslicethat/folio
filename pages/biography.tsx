import React from 'react'

import styles from './biography.module.css'

export default function Biography() {
  return (
    <section className={styles.quote} aria-label="About me">
      <span className={styles.firstLine}>I'm a proud geek, and life long learner.</span>
      <span className={styles.secondLine}>Who can't seem to stop printing "Hello World".</span>
    </section>
  )
}
