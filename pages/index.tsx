import Head from 'next/head'

import styles from './index.module.css'
import Card from './common/components/card'

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
          <Card
            title="Github"
            href="https://github.com/jimboslicethat"
            description="Find out more about how I collaborate & my pet projects"
          />

          <Card
            title="LinkedIn"
            href="https://www.linkedin.com/in/jamesandersonwalsh/"
            description="My preferred way to share my resume with your team"
          />

          <Card
            title="Blog Posts"
            href="https://dev.to/jimboslicethat/"
            description="Check out my posts on my favorite blog platform, dev.to"
          />

          <Card
            title="Contact Me"
            href="mailto:jamesandersonwalsh@gmail.com"
            description="I'm always an email or direct message away 👍"
          />
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
