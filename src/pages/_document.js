import { Html, Head, Main, NextScript } from 'next/document'
import { metaData } from '@/lib/info'

export default function Document() {
  return (
    <Html lang={metaData.openGraph.locale}>
      <Head>
        <link rel="shortcut icon" href="https://abhigyan.tech/AB_light.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
