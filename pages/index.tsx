import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Walsh</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I'm James 🤙</h1>

        <div className={styles.grid}>
          <a
            target="_blank"
            href="https://github.com/jimboslicethat"
            className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Find out more about how I collaborate & my pet projects</p>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/jamesandersonwalsh/"
            className={styles.card}>
            <h3>LinkedIn &rarr;</h3>
            <p>My preferred way to share my resume with your team</p>
          </a>

          <a
            target="_blank"
            href="https://dev.to/jimboslicethat/"
            className={styles.card}>
            <h3>Blog Posts &rarr;</h3>
            <p>Check out my posts on my favorite blog platform, dev.to</p>
          </a>

          <a
            target="_blank"
            href="mailto:jamesandersonwalsh@gmail.com"
            className={styles.card}>
            <h3>Contact Me &rarr;</h3>
            <p>I'm always an email or direct message away 👍</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Deployed with{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
