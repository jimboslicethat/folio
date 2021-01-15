/* eslint-disable react/jsx-props-no-spreading */
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import React from 'react'

import NavBar from 'components/navbar'

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
    <AnimatePresence>
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
        <footer>Powered by Next.js</footer>
      </div>
    </AnimatePresence>
  )
}

export default MyApp
