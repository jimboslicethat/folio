import { Github } from '@styled-icons/boxicons-logos'
import { CodeAlt, Coffee, Link as LinkIcon, MessageDetail } from '@styled-icons/boxicons-regular'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr'

import { container, item } from '../shared/stagger-child-motion'
import styles from '../styles/pages/projects.module.css'

export default function Projects(): React.ReactElement {
  const [learnMoreToggleState, setLearnMoreToggled] = useState({})
  const { data } = useSWR('/api/projects', () => fetch('/api/projects').then(res => res.json()))

  let professionalProjects = []
  let hobbyProjects = []

  if (data) {
    professionalProjects = data.filter(p => p.type === 'professional')
    hobbyProjects = data.filter(p => p.type === 'hobby')
  } else {
    return null
  }

  const handleLearnMoreClick = projectTitle => () => {
    setLearnMoreToggled(prevState => ({ ...prevState, [projectTitle]: !prevState[projectTitle] }))
  }

  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.section className={styles.contentSectionLeft} variants={item}>
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
                  <span
                    tabIndex={0}
                    role="button"
                    className={styles.learnMore}
                    onClick={handleLearnMoreClick(project.title)}
                    onKeyPress={handleLearnMoreClick(project.title)}
                  >
                    Learn More
                  </span>
                </div>
                {learnMoreToggleState[project.title] ? (
                  <div className={styles.moreInfo}>
                    <ul>
                      {project.moreInfo.map((info, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={i}>{info}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <hr />
              </li>
            ))}
          </ul>
        </motion.section>
        <motion.section className={styles.contentSectionRight} variants={item}>
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
                  <span
                    tabIndex={0}
                    role="button"
                    className={styles.learnMore}
                    onClick={handleLearnMoreClick(project.title)}
                    onKeyPress={handleLearnMoreClick(project.title)}
                  >
                    Learn More
                  </span>
                </div>
                {learnMoreToggleState[project.title] ? (
                  <div className={styles.moreInfo}>
                    <ul>
                      {project.moreInfo.map((info, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={i}>{info}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <hr />
              </li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
      <section>
        <h2 className={styles.contactMeHeader}>
          <MessageDetail size="48" />
          To learn even more&nbsp;
          <Link href="/contact-me" passHref>
            <a href="/contact-me" className={styles.contactMeLink}>
              contact me
            </a>
          </Link>
        </h2>
      </section>
    </div>
  )
}
