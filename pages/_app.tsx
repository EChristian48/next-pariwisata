import 'bootstrap/dist/css/bootstrap.css'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { defaultSeoConfig } from '~root/next-seo.config'
import '~root/styles/main.css'
import '~root/styles/slider.css'
import '~root/styles/template.css'
import '~root/styles/FixedSideNavbar.css'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800'
          rel='stylesheet'
        />
      </Head>
      <DefaultSeo {...defaultSeoConfig} />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
