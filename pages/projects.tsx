import { Github } from '@styled-icons/boxicons-logos'
import { CodeAlt, Coffee, Link as LinkIcon, MessageDetail } from '@styled-icons/boxicons-regular'
import React from 'react'

import styles from '../styles/pages/projects.module.css'

interface ProjectItem {
  title: string
  href: string
  description: string
}
const professionalProjects: ProjectItem[] = [
  {
    title: 'Pluralsight Channels',
    href: 'https://www.pluralsight.com/product/channels',
    description: 'Organize content to meet your teams goals.'
  },
  {
    title: 'Pluralsight Analytics Experience',
    href: 'https://help.pluralsight.com/help/analytics',
    description: `Dashboards & reports showing learner's progress.`
  },
  {
    title: 'CI/CD for AI Dungeon',
    href: 'https://play.aidungeon.io/main/landing',
    description: 'Making AI a tool of creativity and freedom for everyone.'
  },
  {
    title: 'VisibleCSM Integration Platform',
    href: 'https://www.visiblescm.com/fulfillment/',
    description: 'Order status, inventory, dynamic shipping, procurement, and pick & pack.'
  },
  {
    title: 'IntegraCore Public Site (archived)',
    href: 'https://web.archive.org/web/20150820072637/http://www.integracore.com/',
    description: 'Public site & white papers for IntegraCore (now VisibleCSM).'
  }
]
const hobbyProjects: ProjectItem[] = [
  {
    title: 'Portfolio',
    href: 'https://github.com/jimboslicethat/folio',
    description: 'The code I used to build this site is public, come snoop!'
  },
  {
    title: 'Contributor to Git Collaborate',
    href: 'https://github.com/pluralsight/git-collaborate',
    description: 'Cross-platform appfor managing git users while pair programming.'
  },
  {
    title: 'Nest Electron Desktop Widget',
    href: 'https://github.com/jimboslicethat/nest-electron-widget',
    description: 'Tired of launching a new tab each time you check on nest?'
  },
  {
    title: 'Creator of sbt-docker image',
    href: 'https://hub.docker.com/r/jimboslicethat/sbt',
    description: 'Docker image for running Scala with SBT as a non-root user.'
  },
  {
    title: 'Contributor to sinon-chai',
    href: 'https://github.com/domenic/sinon-chai/issues/93',
    description: 'provides a set of custom assertions for using the chai assertion library.'
  }
]

export default function Projects(): React.ReactElement {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <div className={styles.content}>
        <section className={styles.contentSectionLeft}>
          <h2 className={styles.sectionTitle}>
            <Coffee size="36" />
            &nbsp;Professional
          </h2>
          <hr />
          <ul className={styles.projectList}>
            {professionalProjects.map(project => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <h4>{project.description}</h4>
                <div className={styles.projectActions}>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <LinkIcon size="16" />
                    Visit Product
                  </a>
                  <span className={styles.learnMore}>Learn More</span>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.contentSectionRight}>
          <h2 className={styles.sectionTitle}>
            <Github size="36" />
            &nbsp;Hobby & Open Source
          </h2>
          <hr />
          <ul className={styles.projectList}>
            {hobbyProjects.map(project => (
              <li key={project.title}>
                <h3>{project.title}</h3>
                <h4>{project.description}</h4>
                <div className={styles.projectActions}>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <CodeAlt size="16" />
                    View Code
                  </a>
                  <span className={styles.learnMore}>Learn More</span>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section>
        <h2>
          <MessageDetail size="48" />
          To learn more... please contact me
        </h2>
      </section>
    </div>
  )
}
