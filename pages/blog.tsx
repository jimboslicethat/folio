import { Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { BiLike, BiCommentDots, BiLabel } from 'react-icons/bi'
import useSWR from 'swr'

import { container, item } from '../shared/stagger-child-motion'
import styles from '../styles/pages/blog.module.css'

export default function Blog(): React.ReactElement {
  const { data } = useSWR('/api/posts', () => fetch('/api/posts').then(res => res.json()))

  if (!data) return null

  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <h3 className={styles.subtitle}>
        Powered by&nbsp;
        <a
          className={styles.devToLink}
          href="https://dev.to/jimboslicethat"
          target="_blank"
          rel="noreferrer"
        >
          dev.to
        </a>
      </h3>
      <motion.ul className={styles.list} variants={container} initial="hidden" animate="visible">
        {data.map(post => (
          <motion.li
            key={post.id}
            className={styles.listItem}
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <a href={post.url} target="_blank" rel="noreferrer">
              <h2 className={styles.title}>{post.title}</h2>
              <div>{post.description}</div>
              <div className={styles.metadata}>
                <span className={styles.metadataContent}>
                  <Icon as={BiLike} boxSize="1.25rem" color="#FF6B6B" marginRight="4px" />
                  {post.positive_reactions_count}
                </span>
                <span className={styles.metadataContent}>
                  <Icon as={BiCommentDots} boxSize="1.25rem" color="#0088CC" marginRight="4px" />
                  {post.comments_count}
                </span>
                <span className={styles.metadataContent}>
                  <Icon as={BiLabel} boxSize="1.25rem" color="#0088CC" marginRight="4px" />
                  <span className={styles.emphasized}>{post.tag_list.map(tag => `#${tag} `)}</span>
                </span>
                <span className={styles.metadataContent}>
                  <span>{new Date(post.published_at).toDateString()}</span>
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
