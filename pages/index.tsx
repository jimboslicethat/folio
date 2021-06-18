import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, IconButton, Flex, Heading, Tooltip, useColorMode, Avatar } from '@chakra-ui/react'
import React from 'react'

const IndexPage = (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()

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
            colorScheme="gray"
            aria-label="Search database"
            margin="4"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          />
        </Tooltip>
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Avatar
          borderRadius="8"
          src="https://avatars.githubusercontent.com/u/8390638?v=4?size=240"
          size="2xl"
          marginBottom="8"
        />
        <Heading as="h1">Hey I&apos;m James, and I write code.</Heading>
      </Flex>
    </Box>
  )
}

export default IndexPage
