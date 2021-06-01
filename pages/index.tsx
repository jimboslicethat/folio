import { Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { BiCodeBlock, BiBookContent, BiMessageDetail, BiInfoCircle } from 'react-icons/bi'

import ActionBox from '../shared/components/action-box'
import { container, item } from '../shared/stagger-child-motion'
import styles from '../styles/pages/index.module.css'

const ICON_COLOR = '#9B7EDE'

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
            icon={<Icon as={BiCodeBlock} color={ICON_COLOR} boxSize="48" />}
            text="Check out my work"
          />
        </motion.span>
        <motion.span variants={item}>
          <ActionBox
            href="/blog"
            icon={<Icon as={BiBookContent} color={ICON_COLOR} boxSize="48" />}
            text="Read my blog posts"
          />
        </motion.span>
        <motion.span variants={item}>
          <ActionBox
            href="/bio"
            icon={<Icon as={BiInfoCircle} color={ICON_COLOR} boxSize="48" />}
            text="Learn more about me"
          />
        </motion.span>
        <motion.span variants={item}>
          <ActionBox
            href="/contact-me"
            icon={<Icon as={BiMessageDetail} color={ICON_COLOR} boxSize="48" />}
            text="Reach out on social"
          />
        </motion.span>
      </motion.section>
    </div>
  )
}
