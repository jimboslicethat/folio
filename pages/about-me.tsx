/* eslint-disable react/button-has-type */
import React, { useState } from 'react'

import styles from '../styles/about-me.module.css'

import Footer from './common/_footer'
import NavBar from './common/_navbar'

export default function BlogPosts(): React.ReactElement {
  const [showAboutMeContent, toggleAboutMeVisiblity] = useState(false)
  const [showHowIGotStartedContent, toggleHowIGotStartedVisibility] = useState(false)
  const [showMyValuesContent, toggleMyValuesVisibility] = useState(false)

  const aboutMeContent = `In the summer you can find me hiking, traveling to national parks, mountain biking, and
          rock climbing. In the winter you can find me huddled up playing my favorite video games or
          chasing powder on my snowboard at one of Utah&apos;s many amazing winter resorts. If you
          can&apos;t tell, I try and spend just as much time outside away from a computer screen as
          I do staring at computer screens.`
  const howIGotStartedContent = `During one hot summer in 2016 I decided to do something I had never done before. I decided
          to click F12 on a web page and start editing the CSS. This lead to an upward spiral where
          I began watching YouTube videos about this crazy thing called JQuery. As the summer went
          on I eventually took the plunge, signed up for a Web Development Bootcamp, and by December
          of that year had joined my first team.`
  const myValuesContent = (
    <ul>
      <li>
        Above all I value both individual & team autonomy. Product teams want to feel intrusted and
        empowered to be able to make decisions and practice their craft to the best of their
        ability.
      </li>
      <li>
        I believe in the need to have comprehensive testing up and down the codebase, as testing and
        code quality directly correlate.
      </li>
      <li>I also believe testing works best, when I write tests first.</li>
      <li>
        I believe in being agile, and believe that at present date, the best way to be agile is by
        delivering de-composed atomic units to production multiple times a day, rather than focusing
        on big overhanging deadlines, or sprints.
      </li>
      <li>
        I believe kanban has the potential to make your work tasks, and personal life tasks easier
        to achieve.
      </li>
      <li>
        I believe in people over processes. But I also believe that processes are sometimes needed
        in order to set people up for success by default, rather than failure.
      </li>
    </ul>
  )

  function renderContent(
    content: string | React.ReactElement,
    shouldShowContent: boolean
  ): React.ReactElement {
    return shouldShowContent && <article className={styles.content}>{content}</article>
  }

  function renderAboutMeTitles(
    title: string,
    emojiAriaLabel: string,
    emoji: string,
    contentToggle: () => unknown
  ): React.ReactElement {
    return (
      <button onClick={contentToggle}>
        {title}
        &nbsp;
        <span role="img" aria-label={emojiAriaLabel}>
          {emoji}
        </span>
      </button>
    )
  }

  return (
    <>
      <NavBar />
      <main className={styles.container}>
        {renderAboutMeTitles('A Little About Me', 'shaka emoji', '🤙', () =>
          toggleAboutMeVisiblity(!showAboutMeContent)
        )}
        {renderContent(aboutMeContent, showAboutMeContent)}

        {renderAboutMeTitles('How I Got Started', 'computer screen', '🖥', () =>
          toggleHowIGotStartedVisibility(!showHowIGotStartedContent)
        )}
        {renderContent(howIGotStartedContent, showHowIGotStartedContent)}

        {renderAboutMeTitles('My Values', 'lightbulb', '💡', () =>
          toggleMyValuesVisibility(!showMyValuesContent)
        )}
        {renderContent(myValuesContent, showMyValuesContent)}
      </main>
      <Footer />
    </>
  )
}
