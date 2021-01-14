import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import styles from '../styles/components/action-box.module.css'

interface Props {
  icon: React.ReactNode
  text: string
  href: string
}

export default function ActionBox({ icon, text, href }: Props): React.ReactElement {
  return (
    <Link href={href} passHref>
      <motion.a href={href} className={styles.container} whileHover={{ scale: 1.03 }}>
        {icon}
        <h2>
          {text}
          &nbsp;&#10132;&nbsp;
        </h2>
      </motion.a>
    </Link>
  )
}
