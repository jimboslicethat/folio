/* eslint-disable react/jsx-props-no-spreading */
import { Github, LinkedinSquare, Twitter } from '@styled-icons/boxicons-logos'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import NavBar from 'shared/components/navbar'

import '../styles/globals.css'

interface Params {
  Component: React.ComponentType
  pageProps: unknown
  router: { pathname: string }
}

function MyApp({ Component, pageProps, router }: Params): React.ReactElement {
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  }
  return (
    <>
      <Head>
        <title>James Walsh</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <AnimatePresence>
        <div id="pageContainer">
          <NavBar />
          <motion.main
            transition={spring}
            key={router.pathname}
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            id="contentWrap"
          >
            <Component {...pageProps} />
          </motion.main>
          <footer>
            <div id="footer-content-left">
              <a href="https://github.com/jimboslicethat" target="_blank" rel="noreferrer">
                <Github size="40" />
              </a>
              <a
                href="https://www.linkedin.com/in/jamesandersonwalsh/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinSquare size="40" />
              </a>
              <a href="https://twitter.com/jimboslicethat" target="_blank" rel="noreferrer">
                <Twitter size="40" />
              </a>
            </div>
            <div id="footer-content-right">
              <span>Powered by Next.js and &nbsp;</span>
              <Image src="/vercel.svg" alt="Vercel Logo" width={64} height={64} />
            </div>
          </footer>
        </div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
