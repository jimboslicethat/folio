import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import CreateIcon from '@material-ui/icons/Create'

import Card from './common/components/card'

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 300px)',
    gridAutoRows: 'minmax(100px, auto)',
    maxWidth: 800,
    marginTop: '2rem'
  },
  '@media (max-width: 600px)': {
    grid: {
      width: '100%',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gridTemplateRows: 'repeat(1, 300px)'
    }
  }
})

export default function GridLinks() {
  const styles = useStyles()
  return (
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
  )
}
