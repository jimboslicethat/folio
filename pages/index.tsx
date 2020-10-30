import Head from 'next/head'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import CreateIcon from '@material-ui/icons/Create'

import styles from './index.module.css'
import Card from './common/components/card'
import NavBar from './navbar'
import Biography from './biography'

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

        <div className={styles.grid}>
          <Card
            title="Github"
            icon={<GitHubIcon fontSize="large" />}
            href="https://github.com/jimboslicethat"
            description="Find out more about how I collaborate & my pet projects"
          />

          <Card
            title="LinkedIn"
            icon={<LinkedInIcon fontSize="large" />}
            href="https://www.linkedin.com/in/jamesandersonwalsh/"
            description="My preferred way to share my resume with your team"
          />

          <Card
            title="Blog Posts"
            icon={<CreateIcon fontSize="large" />}
            href="https://dev.to/jimboslicethat/"
            description="Check out my posts on my favorite blog platform, dev.to"
          />

          <Card
            title="Contact Me"
            icon={<MailIcon fontSize="large" />}
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
          Built using Next.js. Special thanks to{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
