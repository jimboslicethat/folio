import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import CreateIcon from '@material-ui/icons/Create'

import Card from './common/_card'
import styles from '../styles/links.module.css'
import NavBar from './common/_navbar'
import Footer from './common/_footer'

export default function GridLinks(): React.ReactElement {
  return (
    <>
      <NavBar />
      <main className={styles.container}>
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
      <Footer />
    </>
  )
}
