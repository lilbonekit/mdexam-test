import type { FC } from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const BackToTop: FC = () => {
  const [isShowTop, setIsShowTop] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

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
    <Image
      src={`${isHovered ? '/assets/icons/top-hover.png' : '/assets/icons/top.png'}`}
      alt="no img"
      title="Go To Top"
      width={52}
      height={52}
      className={`${isShowTop ? 'visible' : 'hidden'} fixed z-90 bottom-8 right-8 rounded-full shadow-lg ${
        isHovered ? 'shadow-primary' : 'shadow-secondary transition-all duration-500'
      } cursor-pointer z-50`}
      onClick={goToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}

export default BackToTop
