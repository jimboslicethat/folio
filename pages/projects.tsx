import React from 'react'

import styles from '../styles/pages/projects.module.css'

export default function Projects(): React.ReactElement {
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      <h2>
        Under construction...
        <span role="img" aria-label="hammer emoji">
          🔨&nbsp;
        </span>
        Please come back later...
        <span role="img" aria-label="hammer emoji">
          😺
        </span>
      </h2>
    </div>
  )
}
