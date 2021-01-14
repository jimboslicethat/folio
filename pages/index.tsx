import { CodeBlock, BookReader, MessageDetail, InfoCircle } from '@styled-icons/boxicons-regular'
import { motion } from 'framer-motion'
import React from 'react'

import ActionBox from '../components/action-box'
import styles from '../styles/pages/index.module.css'

const iconStyles = {
  color: '#9B7EDE'
}
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3
    }
  }
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Index(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.typewriter}>
        <h1 className={styles.title}>
          Hey. I&apos;m&nbsp;
          <span className={styles.name}>James</span>
          <span>, and I write code.</span>
          <span role="img" aria-label="shaka emoji">
            🤙
          </span>
        </h1>
      </div>
      <motion.section
        className={styles.callToActionSection}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={item}>
          <ActionBox
            href="/projects"
            icon={<CodeBlock style={iconStyles} size="48" />}
            text="Check out my work"
          />
        </motion.span>
        <motion.span variants={item}>
          <ActionBox
            href="/find-me"
            icon={<MessageDetail style={iconStyles} size="48" />}
            text="Reach out on social"
          />
        </motion.span>
        <motion.span variants={item}>
          <ActionBox
            href="/bio"
            icon={<InfoCircle style={iconStyles} size="48" />}
            text="Learn more about me"
          />
        </motion.span>
        <motion.span variants={item}>
          <ActionBox
            href="/blog"
            icon={<BookReader style={iconStyles} size="48" />}
            text="Read my blog posts"
          />
        </motion.span>
      </motion.section>
    </div>
  )
}
