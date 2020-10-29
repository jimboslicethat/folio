import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Walsh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm James
        </h1>

        <div className={styles.grid}>
          <a href="https://github.com/jimboslicethat" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Find out more about how I collaborate & my pet projects.</p>
          </a>

          <a href="https://www.linkedin.com/in/jamesandersonwalsh/" className={styles.card}>
            <h3>LinkedIn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://dev.to/jimboslicethat/"
            className={styles.card}
          >
            <h3>Blog Posts &rarr;</h3>
            <p>Check out all of my posts on the blogging platform I love the most, dev.to</p>
          </a>

          <a
            href="mailto:jamesandersonwalsh@gmail.com"
            className={styles.card}
          >
            <h3>Contact Me &rarr;</h3>
            <p>
              I'm always an email or direct message away 👍
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deploed with{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
