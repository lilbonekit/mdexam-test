import type { FC, ReactNode } from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import BackToTop from '@/components/backtotop'

interface IProps {
  children?: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default Layout
