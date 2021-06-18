/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export default function App({ Component, pageProps }): React.ReactElement {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
