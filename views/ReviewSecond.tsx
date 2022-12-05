import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/container'
import Carousel from '@/components/carousel'
import { SwiperSlide } from 'swiper/react'

const ReviewSecond: FC = () => {
  return (
    <Container className="mt-20 flex flex-col items-center text-center">
      <p className="text-secondary text-[16px] font-bold">PRODUCT REVIEW</p>
      <div className="mt-4 relative py-4 w-full">
        <div className="absolute top-0 w-full h-[1.5px] bg-black" />
        <p className="text-xl font-bold">Why do our customers love with us?</p>
        <div className="absolute bottom-0 w-full h-[2px] bg-black" />
      </div>
      <Carousel className="mt-24">
        <SwiperSlide>
          <div className="flex flex-col items-center rounded-[20px] pt-0 px-2.5 pb-[15px] shadow-[0_8px_30px_-7px_#c9dff0] w-[280px]">
            <Image src="/assets/images/customer1.png" className="rounded-full shadow-[0_8px_20px_-4px_#95abbb]" width={60} height={60} alt="no img" />
            <p className="mt-[30px] text-secondary text-[20px] font-bold">Ronne Galle</p>
            <p className="text-[#666666] text-[16px] font-bold">Project Manager</p>
            <p className="mt-2.5 text-[#555555] text-[18px]">
              “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center rounded-[20px] pt-0 px-2.5 pb-[15px] shadow-[0_8px_30px_-7px_#c9dff0] w-[280px]">
            <Image src="/assets/images/customer2.png" className="rounded-full shadow-[0_8px_20px_-4px_#95abbb]" width={60} height={60} alt="no img" />
            <p className="mt-[30px] text-secondary text-[20px] font-bold">Missy Limana</p>
            <p className="text-[#666666] text-[16px] font-bold">Engineer</p>
            <p className="mt-2.5 text-[#555555] text-[18px]">
              “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center rounded-[20px] pt-0 px-2.5 pb-[15px] shadow-[0_8px_30px_-7px_#c9dff0] w-[280px]">
            <Image src="/assets/images/customer3.png" className="rounded-full shadow-[0_8px_20px_-4px_#95abbb]" width={60} height={60} alt="no img" />
            <p className="mt-[30px] text-secondary text-[20px] font-bold">Martha Brown</p>
            <p className="text-[#666666] text-[16px] font-bold">Project Manager</p>
            <p className="mt-2.5 text-[#555555] text-[18px]">
              “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center rounded-[20px] pt-0 px-2.5 pb-[15px] shadow-[0_8px_30px_-7px_#c9dff0] w-[280px]">
            <Image src="/assets/images/customer4.png" className="rounded-full shadow-[0_8px_20px_-4px_#95abbb]" width={60} height={60} alt="no img" />
            <p className="mt-[30px] text-secondary text-[20px] font-bold">Hanna Lisem</p>
            <p className="text-[#666666] text-[16px] font-bold">Project Manager</p>
            <p className="mt-2.5 text-[#555555] text-[18px]">
              “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ”
            </p>
          </div>
        </SwiperSlide>
      </Carousel>
      <p className="mt-8">
        FINALLY. lose weight and feel great__ <span className="font-bold">for good</span>
      </p>
      <p className="mt-8 text-md font-bold">Get started today with MD Exam</p>
      <Link href="https://app.mdexam.com/intake/firstname" target={'_blank'} className="mt-8">
        <button className="w-[329px] h-[58px] rounded-[7px] bg-primary hover:bg-secondary">
          <span className="text-white font-bold text-[16px]">Click here to fill out your forms</span>
        </button>
      </Link>
    </Container>
  )
}

export default ReviewSecond
