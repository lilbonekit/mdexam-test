import type { FC } from 'react'
import Container from '@/components/container'

const Guarantee: FC = () => {
  return (
    <Container className="mt-24 text-white text-center">
      <div className="bg-black border border-solid border-secondary rounded-[7px] py-10 sm:py-14 px-[20px] sm:px-[30px] flex flex-col gap-8">
        <div className="mt-4 relative py-4 w-full">
          <div className="absolute top-0 w-full h-[1.5px] bg-white" />
          <p className="text-center text-[30px] leading-10 sm:text-xl font-bold">The &quot;Lose Weight, Feel Great&quot; Guarantee</p>
          <div className="absolute bottom-0 w-full h-[2px] bg-white" />
        </div>
        <p>This At MD Exam, we have multiple different programs and offers available.</p>
        <p>
          We know we need various strategies to shed fat and keep it off for good. We serve so many different people with different genetics, and
          despite what some might think, there’s no “one size fits all” pill or program.
        </p>
        <p>What works is a combination of our best effort leveraging science and your best effort simply showing up for yourself every day.</p>
        <p>It may not be easy, but we’ll do everything we can to make it feel that way for you.</p>
        <p> Our team has seen nearly every circumstance and situation where people struggle with weight loss.</p>
        <p>
          And because we’re so confident that we can help you on your journey to a better, lighter you, MD Exam offers a full “Lose Weight, Feel
          Great” guarantee on all of our programs.
        </p>
        <p>
          If you do your part, follow your recommended plan, and <span className="font-bold">STILL</span> aren’t losing weight within the first 90
          days, <span className="font-bold">we’ll give you a full refund on the spot.</span>
        </p>
        <p>But we know you won’t need to do that.</p>
        <p>Because so many patients who stuck to their plans are currently living their best lives.</p>
        <p>They were dedicated to their success and simply needed some help from modern medicine and guidance along the way.</p>
        <p>When you have our providers on your side, the only thing getting in the way is your decision to take the help or not.</p>
        <p>And right now, you have a choice: you can continue life as it is, struggling to lose weight or feel comfortable in your own body…</p>
        <p>
          ... Or you can do what hundreds/thousands of other people just like you have done and start seeing your life and body transform like this:
        </p>
      </div>
    </Container>
  )
}

export default Guarantee
