import Head from 'next/head'
import React from 'react'

import Biography from '../components/biography'
import styles from '../styles/pages/index.module.css'

export default function Index(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Walsh</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m James&nbsp;
          <span role="img" aria-label="shaka emoji">
            🤙
          </span>
        </h1>
        <Biography />
      </main>
    </div>
  )
}
