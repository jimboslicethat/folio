import Head from 'next/head'
import React from 'react'

export default function Meta(): React.ReactElement {
  const description = `Hey, I'm James 🤙. I'm a software engineer who lives and works in Salt Lake City. The following is my digital biz card, portfolio, blog, & biography.`
  const siteUrl = 'https://jameswalsh.tech'
  const cardSiteTitle = 'James Walsh | Software Engineer'
  const imageUrl = 'https://jameswalsh.tech/avatar.jpeg'

  return (
    <Head>
      <title>James Walsh</title>

      <meta name="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={cardSiteTitle} />
      <meta name="og:description" property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={cardSiteTitle} />
      <meta property="twitter:image" content={imageUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@jimboslicethat" />
      <meta name="twitter:creator" content="@jimboslicethat" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />

      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
