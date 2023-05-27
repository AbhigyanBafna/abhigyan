import { Html, Head, Main, NextScript } from 'next/document'
import { metadata } from '@/lib/info'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.image.url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:image:alt" content={metadata.twitter.image_alt} />
        <meta name="twitter:domain" content={metadata.twitter.domain} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />

        {/* Favicon */}
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
