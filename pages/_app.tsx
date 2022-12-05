import type { FC } from 'react'
import type { AppProps } from 'next/app'
import ProgressBar from 'react-progressbar-on-scroll'
import SEOSupport from '@/components/seo-support'
import Layout from '@/layout/index'
import '@/styles/globals.css'
import 'swiper/css/bundle'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SEOSupport title="MD Exam | Lose Weight Feel Great" description="MD Exam is a 50 state telemedicine clinic specializing in weight loss." />
      <ProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
