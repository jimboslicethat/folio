import { Github, LinkedinSquare, Twitter } from '@styled-icons/boxicons-logos'
import { MailSend } from '@styled-icons/boxicons-regular'
import React from 'react'

import styles from '../styles/pages/contact-me.module.css'

export default function ContactMe(): React.ReactElement {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <section className={styles.contactItems}>
        <h2 className={styles.contactItem}>
          <a href="https://linkedin.com/in/jamesandersonwalsh">
            <LinkedinSquare size="80" />
            LinkedIn
          </a>
        </h2>
        <h2 className={styles.contactItem}>
          <a href="https://github.com/jimboslicethat">
            <Github size="80" />
            Github
          </a>
        </h2>
        <h2 className={styles.contactItem}>
          <a href="https://twitter.com/jimboslicethat">
            <Twitter size="80" />
            Twitter
          </a>
        </h2>
        <h2 className={styles.contactItem}>
          <a href="mailto:jameswalsh@hey.com">
            <MailSend size="80" />
            Email
          </a>
        </h2>
      </section>
    </div>
  )
}
