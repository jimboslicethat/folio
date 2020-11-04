import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

import styles from '../styles/about-me.module.css'

import Footer from './common/_footer'
import NavBar from './common/_navbar'

export default function AboutMe(): React.ReactElement {
  const [showAboutMeContent, toggleAboutMeVisiblity] = useState(false)
  const [showHowIGotStartedContent, toggleHowIGotStartedVisibility] = useState(false)
  const [showMyValuesContent, toggleMyValuesVisibility] = useState(false)

  return (
    <>
      <NavBar />
      <main className={styles.container}>
        <ReactCardFlip isFlipped={showAboutMeContent}>
          <AboutMeTile
            title="A Little About Me"
            ariaLabel="shaka emoji"
            emoji="🤙"
            onClick={() => toggleAboutMeVisiblity(!showAboutMeContent)}
          />

          <section
            role="button"
            className={styles.tileSection}
            onClick={() => toggleAboutMeVisiblity(!showAboutMeContent)}
            onKeyPress={() => toggleAboutMeVisiblity(!showAboutMeContent)}
            tabIndex={0}
          >
            In the summer you can find me hiking, traveling to national parks, mountain biking, and
            rock climbing. In the winter you can find me huddled up playing my favorite video games
            or chasing powder on my snowboard at one of Utah&apos;s many amazing winter resorts. If
            you can&apos;t tell, I try and spend just as much time outside away from a computer
            screen as I do staring at computer screens.
          </section>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={showHowIGotStartedContent}>
          <AboutMeTile
            title="How I Got Started"
            ariaLabel="computer screen"
            emoji="🖥"
            onClick={() => toggleHowIGotStartedVisibility(!showHowIGotStartedContent)}
          />

          <section
            role="button"
            className={styles.tileSection}
            onClick={() => toggleHowIGotStartedVisibility(!showHowIGotStartedContent)}
            onKeyPress={() => toggleHowIGotStartedVisibility(!showHowIGotStartedContent)}
            tabIndex={0}
          >
            In 2016 I decided to do something I had never done before. Out of curiosity I clicked
            F12 on a web page and start editing the CSS. This lead to watching YouTube videos about
            this crazy thing called JQuery. As the summer went on I eventually took the plunge,
            signed up for a Web Development Bootcamp, and by December of that year had joined my
            first team. I&apos;ve been happily writing code ever since.
          </section>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={showMyValuesContent}>
          <AboutMeTile
            title="My Values"
            ariaLabel="light bulb"
            emoji="💡"
            onClick={() => toggleMyValuesVisibility(!showMyValuesContent)}
          />

          <section
            role="button"
            className={styles.tileSection}
            onClick={() => toggleMyValuesVisibility(!showMyValuesContent)}
            onKeyPress={() => toggleMyValuesVisibility(!showMyValuesContent)}
            tabIndex={0}
          >
            I value individual & team autonomy. I believe in the need for comprehensive testing, as
            testing and code quality directly correlate. I believe the best way to be agile is by
            delivering small units of value to production multiple times a day, rather than focusing
            on big overhanging deadlines, or sprints. I believe in people over processes. But also
            that processes are sometimes necessary in order to set people up for success.
          </section>
        </ReactCardFlip>
      </main>
      <Footer />
    </>
  )
}

interface AboutMeTileParams {
  title: string
  ariaLabel: string
  emoji: string
  onClick: () => unknown
}

function AboutMeTile(params: AboutMeTileParams): React.ReactElement {
  const { title, ariaLabel, emoji, onClick } = params

  return (
    <>
      <section
        role="button"
        className={styles.tileSection}
        onClick={onClick}
        onKeyPress={onClick}
        tabIndex={0}
      >
        {title}
        &nbsp;
        <span role="img" aria-label={ariaLabel}>
          {emoji}
        </span>
      </section>
    </>
  )
}
