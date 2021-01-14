import { Like, CommentDots, Label } from '@styled-icons/boxicons-solid'
import React from 'react'
import useSWR from 'swr'

import styles from '../styles/pages/blog.module.css'

const iconStyles = { color: '#0088CC', marginRight: 4 }

export default function BlogPosts(): React.ReactElement {
  const { data } = useSWR('/api/posts', () => fetch('/api/posts').then(res => res.json()))

  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <li className={styles.list}>
        {data.map(post => (
          <ul key={post.id} className={styles.listItem}>
            <a href={post.url} target="_blank" rel="noreferrer">
              <h2 className={styles.title}>{post.title}</h2>
              <div>{post.description}</div>
              <div className={styles.metadata}>
                <span className={styles.metadataContent}>
                  <Like size="1.25rem" style={{ ...iconStyles, color: '#FF6B6B' }} />
                  {post.positive_reactions_count}
                </span>
                <span className={styles.metadataContent}>
                  <CommentDots size="1.25rem" style={iconStyles} />
                  {post.comments_count}
                </span>
                <span className={styles.metadataContent}>
                  <Label size="1.25rem" style={iconStyles} />
                  <span className={styles.emphasized}>{post.tag_list.map(tag => `#${tag} `)}</span>
                </span>
                <span className={styles.metadataContent}>
                  <span>{new Date(post.published_at).toDateString()}</span>
                </span>
              </div>
            </a>
          </ul>
        ))}
      </li>
    </div>
  )
}
