import { Grid, GridItem, Link, Heading, Text, Icon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import { GrGithub, GrLinkedin, GrTwitter, GrMail } from 'react-icons/gr'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  line-height: 4rem;
`

export default function ContactMe(): React.ReactElement {
  return (
    <Container>
      <Heading as="h1" borderBottom="5px solid #fff">
        Contact Me
      </Heading>
      <Grid
        templateColumns="auto auto"
        templateRows="auto auto"
        as="section"
        aria-label="Social media list"
      >
        <GridItem margin="3rem">
          <StyledLink href="https://linkedin.com/in/jamesandersonwalsh" isExternal>
            <Icon as={GrLinkedin} boxSize="64px" marginRight="16px" />
            <Text>LinkedIn</Text>
          </StyledLink>
        </GridItem>
        <GridItem margin="3rem">
          <StyledLink href="https://github.com/jimboslicethat" isExternal>
            <Icon as={GrGithub} boxSize="64px" marginRight="16px" />
            <Text>Github</Text>
          </StyledLink>
        </GridItem>
        <GridItem margin="3rem">
          <StyledLink href="https://twitter.com/jimboslicethat" isExternal>
            <Icon as={GrTwitter} boxSize="64px" marginRight="16px" />
            <Text>Twitter</Text>
          </StyledLink>
        </GridItem>
        <GridItem margin="3rem">
          <StyledLink href="mailto:jameswalsh@hey.com" isExternal>
            <Icon as={GrMail} boxSize="64px" marginRight="16px" />
            <Text>Email</Text>
          </StyledLink>
        </GridItem>
      </Grid>
    </Container>
  )
}
