import type { FC } from 'react'

import Introduction from '@/views/Introduction'
import Reasons from '@/views/Reasons'
import Together from '@/views/Together'
import FeelGreat from '@/views/FeelGreat'
import ReviewFirst from '@/views/ReviewFirst'
import ReviewSecond from '@/views/ReviewSecond'
import Process from '@/views/Process'
import Guarantee from '@/views/Guarantee'
import FAQ from '@/views/FAQ'

const Home: FC = () => {
  return (
    <>
      <Introduction />
      <Reasons />
      <Together />
      <FeelGreat />
      <ReviewFirst />
      <Process />
      <Guarantee />
      <ReviewSecond />
      <FAQ />
    </>
  )
}

export default Home
