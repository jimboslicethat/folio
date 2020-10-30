import React from 'react'

import styles from './biography.module.css'

export default function Biography() {
  return (
    <blockquote className={styles.quote} aria-label="About me">
      I'm a proud geek, and life long learner. I'm excited about everything related to full stack
      development, computer science, & technology in general. From the apps that make me more
      productive, to the IoT devices that power my house; I consistenly find new and compelling
      reasons to write "Hello World" one more time.
    </blockquote>
  )
}
