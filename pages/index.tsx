import Head from 'next/head'

import styles from './index.module.css'
import NavBar from './navbar'
import Biography from './biography'
import GridLinks from './grid-links'

export default function Home() {
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
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I'm James 🤙</h1>
        <Biography />
        <GridLinks />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Built using Next.js. Special thanks to{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
