import type { FC, ReactNode } from 'react'

// Import Swiper React components
import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

interface IProps {
  children?: ReactNode
  className?: string
}

const Carousel: FC<IProps> = props => {
  const { children, className } = props

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop={true}
      centeredSlides={true}
      modules={[Pagination]}
      className={`${className}`}
    >
      {children}
    </Swiper>
  )
}

Carousel.defaultProps = {
  className: '',
}

export default Carousel
