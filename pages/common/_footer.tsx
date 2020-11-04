import React from 'react'

import styles from '../../styles/common/_footer.module.css'

export default function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built using Next.js.
      </a>
    </footer>
  )
}
