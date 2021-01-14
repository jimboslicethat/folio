import Head from 'next/head'
import React from 'react'

import Biography from '../components/biography'
import styles from '../styles/pages/index.module.css'

export default function Index(): React.ReactElement {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Hi, I&apos;m James&nbsp;
        <span role="img" aria-label="shaka emoji">
          🤙
        </span>
      </h1>
      <Biography />
    </div>
  )
}
