import type { FC } from 'react'
import Image from 'next/image'
import Container from '@/components/container'

const Together: FC = () => {
  return (
    <Container className="mt-20">
      <div className="relative py-4">
        <div className="absolute top-0 w-full h-[1.5px] bg-black" />
        <p className="text-center text-[30px] leading-10 sm:text-xl font-bold">At the end of the day, you&apos;re not alone</p>
        <div className="absolute bottom-0 w-full h-[2px] bg-black" />
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
          <div className="grow flex flex-col gap-6 order-2 md:order-1">
            <p>So many people who’ve come to MD Exam dealt with the ups and downs of weight loss for far too long.</p>
            <p>It feels like no matter how many times you try to lose those 15 to 20 pounds, it keeps coming back and adding more to the scale.</p>
            <p>And no matter how many times you try to make a change in your life, you might feel stuck.</p>
            <p>Here’s something you need to understand: you’re not alone in this.</p>
          </div>
          <Image
            className="flex-none rounded-lg lg:w-[401px] lg:h-[287px] w-[350px] h-[250px] order-1 md:order-2"
            src="/assets/images/together.png"
            alt="no img"
            width={401}
            height={287}
          />
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <p>
            It’s not just you suffering from the yo-yo effect; it’s not that you aren’t trying hard enough, and it may not even be something in your
            control right now.
          </p>
          <p>Yes, there are a lot of people who can lose weight and keep it off all by themselves.</p>
          <p>There are also a lot of people who need help to do that.</p>
          <p>Usually, it’s with a personal trainer.</p>
          <p>Sometimes a nutritionist needs to get involved.</p>
          <p>
            Other times, like right now, <span className="font-bold">it’s with a medical professional’s help and a little chemistry.</span>
          </p>
          <p>As I said, there’s a good chance it’s not your fault, but that doesn’t matter now.</p>
          <p>
            What matters is there’s something you can do about it
            <span className="font-bold">—and we want to be the ones to help.</span>
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Together
