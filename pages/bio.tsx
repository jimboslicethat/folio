/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Avatar from 'react-avatar'

import styles from '../styles/pages/bio.module.css'

export default function Bio(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Avatar
        githubHandle="jimboslicethat"
        size="160"
        round="20px"
        name="James Walsh Github Profile Picture"
      />
      <h1>A Little About Me</h1>
      <div className={styles.content}>
        <section className={styles.contentSectionMiddle}>
          <h2>What I Care About</h2>
          <hr />
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </section>
        <section className={styles.contentSectionLeft}>
          <h2>Skills / Expertise</h2>
          <hr />
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </section>
        <section className={styles.contentSectionRight}>
          <h2>Want to know more?</h2>
          <hr />
          <p>
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </section>
      </div>
    </div>
  )
}
