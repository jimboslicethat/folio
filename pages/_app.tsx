/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import Footer from 'components/footer'
import NavBar from 'components/navbar'

import '../styles/globals.css'

interface Params {
  Component: React.ComponentType
  pageProps: unknown
}
function MyApp({ Component, pageProps }: Params): React.ReactElement {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
