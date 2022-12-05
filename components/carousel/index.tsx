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
      modules={[Pagination]}
      className={`${className}`}
      breakpoints={{
        0: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        640: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      }}
    >
      {children}
    </Swiper>
  )
}

Carousel.defaultProps = {
  className: '',
}

export default Carousel
