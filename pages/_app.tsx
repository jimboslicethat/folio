import React from 'react'

import './globals.css'

interface Params {
  Component: React.ComponentType
  pageProps: unknown
}
function MyApp({ Component, pageProps }: Params): React.ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default MyApp
