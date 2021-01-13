import React from 'react'

import styles from '../styles/components/biography.module.css'

export default function Biography(): React.ReactElement {
  return (
    <section className={styles.quote} aria-label="About me">
      <span className={styles.firstLine}>I&apos;m a proud geek, & life long learner.</span>
      <span className={styles.secondLine}>
        Who can&apos;t stop printing &quot;Hello World.&quot;
      </span>
    </section>
  )
}
