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
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card tags */}
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:card" content={metadata.twitter.card} />

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
