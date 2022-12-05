import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

interface IProps {
  children?: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
  const [isShowTop, setIsShowTop] = useState<boolean>(false)

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onScroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) setIsShowTop(true)
    else setIsShowTop(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Image
        src="/assets/icons/top.png"
        alt="no img"
        onClick={goToTop}
        title="Go To Top"
        width={64}
        height={64}
        className={`${isShowTop ? 'visible' : 'hidden'} fixed z-90 bottom-8 right-8 rounded-full shadow-2xl cursor-pointer z-50`}
      />
    </>
  )
}

export default Layout
