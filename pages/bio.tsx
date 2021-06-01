/* eslint-disable react/no-unescaped-entities */

import { Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import Avatar from 'react-avatar'
import {
  BiBusSchool,
  BiHomeSmile,
  BiBulb,
  BiConversation,
  BiCodeAlt,
  BiCoffee,
  BiData,
  BiHappyBeaming,
  BiListCheck,
  BiServer,
  BiSun,
  BiTestTube
} from 'react-icons/bi'
import {
  GiSlicedBread,
  GiPineTree,
  GiMineralHeart,
  GiBrain,
  GiKeyboard,
  GiGamepad
} from 'react-icons/gi'
import useSWR from 'swr'

import { container, item } from '../shared/stagger-child-motion'
import styles from '../styles/pages/bio.module.css'

const bioDataIconMap = {
  'Full Stack Developer': <Icon as={BiCodeAlt} color="#5CC8FF" boxSize="20px" />,
  'Product Dev Lifecycle': <Icon as={BiHappyBeaming} color="#5CC8FF" boxSize="20px" />,
  'Software Craftsmanship': <Icon as={BiConversation} color="#5CC8FF" boxSize="20px" />,
  'Testing Philosophy': <Icon as={BiTestTube} color="#5CC8FF" boxSize="20px" />,
  'Lean Development': <Icon as={BiListCheck} color="#5CC8FF" boxSize="20px" />,
  'Front End': <Icon as={BiCodeAlt} color="#9B7EDE" boxSize="20px" />,
  'Server side': <Icon as={BiServer} color="#9B7EDE" boxSize="20px" />,
  Testing: <Icon as={BiTestTube} color="#9B7EDE" boxSize="20px" />,
  Data: <Icon as={BiData} color="#9B7EDE" boxSize="20px" />,
  Architecture: <Icon as={BiBulb} color="#9B7EDE" boxSize="20px" />,
  'Studied At': <Icon as={BiBusSchool} color="#9B7EDE" boxSize="20px" />,
  'Outdoorsy Stuff': <Icon as={GiPineTree} color="#FF6B6B" boxSize="20px" />,
  'Indoorsy Stuff': <Icon as={BiHomeSmile} color="#FF6B6B" boxSize="20px" />,
  'Coffee Nut': <Icon as={BiCoffee} color="#FF6B6B" boxSize="20px" />,
  'Keeb Enthusiast': <Icon as={GiKeyboard} color="#FF6B6B" boxSize="20px" />,
  Baking: <Icon as={GiSlicedBread} color="#FF6B6B" boxSize="20px" />,
  'Survivor Fan': <Icon as={BiSun} color="#FF6B6B" boxSize="20px" />
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
        <motion.section className={styles.contentSectionLeft} variants={item}>
          <h2>
            <Icon as={GiMineralHeart} boxSize="36px" />
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
        <motion.section className={styles.contentSectionMiddle} variants={item}>
          <h2>
            <Icon as={GiBrain} boxSize="36px" />
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
        <motion.section className={styles.contentSectionRight} variants={item}>
          <h2>
            <Icon as={GiGamepad} boxSize="36px" />
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
