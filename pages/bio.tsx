/* eslint-disable react/no-unescaped-entities */
import {
  Brain,
  BookHeart,
  Bulb,
  Conversation,
  CodeAlt,
  Coffee,
  Data,
  Game,
  HappyBeaming,
  ListCheck,
  Server,
  Sun,
  TestTube
} from '@styled-icons/boxicons-regular'
import { BusSchool, HomeSmile, Hot, Keyboard, Tree } from '@styled-icons/boxicons-solid'
import { motion } from 'framer-motion'
import React from 'react'
import Avatar from 'react-avatar'
import useSWR from 'swr'

import styles from '../styles/pages/bio.module.css'

const whatICareAboutIconStyles = {
  color: '#5CC8FF'
}
const skillsIconStyles = {
  color: '#9B7EDE'
}
const hobbiesIconStyles = {
  color: '#FF6B6B'
}
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
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

const bioDataIconMap = {
  'Full Stack Developer': <CodeAlt style={whatICareAboutIconStyles} size="20" />,
  'Product Dev Lifecycle': <HappyBeaming style={whatICareAboutIconStyles} size="20" />,
  'Software Craftsmanship': <Conversation style={whatICareAboutIconStyles} size="20" />,
  'Testing Philosophy': <TestTube style={whatICareAboutIconStyles} size="20" />,
  'Lean Development': <ListCheck style={whatICareAboutIconStyles} size="20" />,
  'Front End': <CodeAlt style={skillsIconStyles} size="20" />,
  'Server side': <Server style={skillsIconStyles} size="20" />,
  Testing: <TestTube style={skillsIconStyles} size="20" />,
  Data: <Data style={skillsIconStyles} size="20" />,
  Architecture: <Bulb style={skillsIconStyles} size="20" />,
  'Studied At': <BusSchool style={skillsIconStyles} size="20" />,
  'Outdoorsy Stuff': <Tree style={hobbiesIconStyles} size="20" />,
  'Indoorsy Stuff': <HomeSmile style={hobbiesIconStyles} size="20" />,
  'Coffee Nut': <Coffee style={hobbiesIconStyles} size="20" />,
  'Keeb Enthusiast': <Keyboard style={hobbiesIconStyles} size="20" />,
  Baking: <Hot style={hobbiesIconStyles} size="20" />,
  'Survivor Fan': <Sun style={hobbiesIconStyles} size="20" />
}

export default function Bio(): React.ReactElement {
  const { data } = useSWR('/api/bio', () => fetch('/api/bio').then(res => res.json()))
  let whatICareAboutData = []
  let skillsData = []
  let hobbiesData = []

  if (data) {
    whatICareAboutData = data.filter(d => d.type === 'what-i-care-about')
    skillsData = data.filter(d => d.type === 'skills')
    hobbiesData = data.filter(d => d.type === 'hobbies')
  } else {
    return null
  }

  return (
    <div className={styles.container}>
      <Avatar
        githubHandle="jimboslicethat"
        size="200"
        round="20px"
        name="James Walsh Github Profile Picture"
      />
      <h1>A Little About Me</h1>
      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          className={styles.contentSectionLeft}
          variants={item}
          whileHover={{ scale: 1.02 }}
        >
          <h2>
            <BookHeart size="36" />
            &nbsp;What I Care About
          </h2>
          <hr />
          <ul className={styles.bioList}>
            {whatICareAboutData.map(d => (
              <li key={d.title}>
                <b>
                  {bioDataIconMap[d.title]}
                  &nbsp;
                  {d.title}
                  :&nbsp;
                </b>
                {d.text}
              </li>
            ))}
          </ul>
        </motion.section>
        <motion.section
          className={styles.contentSectionMiddle}
          variants={item}
          whileHover={{ scale: 1.02 }}
        >
          <h2>
            <Brain size="36" />
            &nbsp;Skills / Expertise
          </h2>
          <hr />
          <ul className={styles.bioList}>
            {skillsData.map(d => (
              <li key={d.title}>
                <b>
                  {bioDataIconMap[d.title]}
                  &nbsp;
                  {d.title}
                  :&nbsp;
                </b>
                {d.text}
              </li>
            ))}
          </ul>
        </motion.section>
        <motion.section
          className={styles.contentSectionRight}
          variants={item}
          whileHover={{ scale: 1.02 }}
        >
          <h2>
            <Game size="36" />
            Hobbies & Interests
          </h2>
          <hr />
          <ul className={styles.bioList}>
            {hobbiesData.map(d => (
              <li key={d.title}>
                <b>
                  {bioDataIconMap[d.title]}
                  &nbsp;
                  {d.title}
                  :&nbsp;
                </b>
                {d.text}
              </li>
            ))}
          </ul>
        </motion.section>
      </motion.div>
    </div>
  )
}
