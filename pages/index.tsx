import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Flex,
  Heading,
  Tooltip,
  Text,
  useColorMode,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionAvatar = motion(Avatar)
const MotionText = motion(Text)

const headingContainerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
}
const headerAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const IndexPage = (): React.ReactElement => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box width="100vw" height="100vh">
      <Flex justifyContent="flex-end">
        <Tooltip
          label="Switch between light & dark mode"
          aria-label="Switch between light & dark mode"
          openDelay={500}
        >
          <IconButton
            onClick={toggleColorMode}
            backgroundColor={useColorModeValue('gray.100', 'gray.700')}
            aria-label="Search database"
            margin="4"
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          />
        </Tooltip>
      </Flex>
      <Flex alignItems="center" flexDirection="column">
        <MotionFlex
          variants={headingContainerAnimation}
          initial="hidden"
          animate="show"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MotionHeading
            color={useColorModeValue('blue.600', 'blue.400')}
            as="h1"
            size="4xl"
            marginBottom="1rem"
            variants={headerAnimation}
            colorScheme="gray"
          >
            James Walsh
          </MotionHeading>
          <MotionHeading
            color={useColorModeValue('blue.400', 'blue.200')}
            as="h2"
            size="xl"
            marginBottom="1rem"
            variants={headerAnimation}
          >
            UI/UX Software Engineer
          </MotionHeading>
          <MotionAvatar
            src="https://avatars.githubusercontent.com/u/8390638?v=4?size=240"
            size="2xl"
            marginBottom="8"
            variants={headerAnimation}
          />
          <MotionText
            color={useColorModeValue('gray.600', 'gray.500')}
            fontWeight="500"
            marginTop="1rem"
            width="40rem"
            fontSize="xl"
            textAlign="center"
            variants={headerAnimation}
          >
            Hey, I&apos;m James! Welcome to my portfolio.
          </MotionText>
          <MotionText
            color={useColorModeValue('gray.600', 'gray.500')}
            fontWeight="500"
            marginTop="1rem"
            width="40rem"
            fontSize="xl"
            textAlign="center"
            variants={headerAnimation}
          >
            I build user interfaces. Currently, I&apos;m at Podium where I&apos;m building a design
            system in React that&apos;s focused on accessiblility, simplicity, & atomic design
            principles.
          </MotionText>
        </MotionFlex>
      </Flex>
    </Box>
  )
}

export default IndexPage
