/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head'
import React from 'react'

import NavBar from 'components/navbar'

import '../styles/globals.css'

interface Params {
  Component: React.ComponentType
  pageProps: unknown
}
function MyApp({ Component, pageProps }: Params): React.ReactElement {
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
      <div id="pageContainer">
        <NavBar />
        <main id="contentWrap">
          <Component {...pageProps} />
        </main>
        <footer>Powered by Next.js</footer>
      </div>
    </>
  )
}

export default MyApp
