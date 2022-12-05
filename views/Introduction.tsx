import type { FC } from 'react'
import Link from 'next/link'
import Container from '@/components/container'

const Introduction: FC = () => {
  return (
    <Container className="mt-10 flex flex-col items-center">
      <p className="text-primary text-center text-md font-bold">
        If You’ve Been Struggling To Lose The Same 15-20 LBs In The Last 5 Years,
        <br />
        There’s PROOF It Isn’t Your Fault…
      </p>
      <p className="mt-6 text-primary text-center text-xl font-bold">
        Discover The Doctor-Approved Methods Used For Decades To Help Patients Melt Fat And Feel Great In Their Bodies Without Crash Dieting Or
        Intense Exercise.
      </p>
      <iframe
        allow="autoplay"
        allowFullScreen
        src="https://www.youtube.com/embed/sK0g4KJhG64?showinfo=0&wmode=transparent&rel=0&autoplay=1&mute=1&controls=1"
        className="mt-10 mb-16 w-full h-[34.5rem] border-[5px] border-secondary rounded-[10px]"
      ></iframe>
      <div className="w-full h-[1.5px] bg-black" />
      <div className="mt-10 flex flex-col gap-6">
        <p className="text-md font-bold">America has been going through an obesity epidemic for over 3 decades with no signs of stopping.</p>
        <p className="italic">Did you know as of 2019, 39% of adults 18 years and older were overweight?</p>
        <p className="italic">Or that nearly 1 in 4 Americans are considered obese?</p>
        <p>Those stats only get more concerning when you consider the recent pandemic.</p>
        <p>
          While people were stuck at home waiting on their couches for the world to open up, 42% of adults in the US reported gaining “too much
          weight.”
        </p>
        <p>
          And when the American Psychological Association calculated those numbers, there was{' '}
          <span className="font-bold">an average weight gain of 29 pounds.</span>
        </p>
        <p>
          Maybe some people put in the work, shed some fat, and are back to where they were pre-pandemic
          <span className="italic">—but what about the rest of us who put in the effort and still don’t see the results?</span>
        </p>
        <p className="italic font-bold">What about the people who’ve been struggling to change their body image since before the pandemic?</p>
        <p>Maybe you&apos;ve tried:</p>
        <ul className="list-outside list-disc pl-10">
          <li>
            <span>Weight Watchers</span>
          </li>
          <li>
            <span>Atkins</span>
          </li>
          <li>
            <span>Keto</span>
          </li>
          <li>
            <span>Beach Body</span>
          </li>
          <li>
            <span>Intermittent Fasting</span>
          </li>
          <li>
            <span>Diet Pills</span>
          </li>
          <li>
            <span>Gastric Bypass</span>
          </li>
        </ul>
        <p>Maybe you’ve tried everything under the sun, but the scale doesn’t budge despite your best efforts.</p>
        <p>
          And even if you found success with one of these methods, <span className="font-bold">it was probably short-lived.</span>
        </p>
        <p>
          Before coming to MD Exam, patients that did lose weight at some point reported keeping it off for no more than a couple of years (some
          saying they only kept it off for less than a month).
        </p>
        <p>If this sounds like you, that’s okay because it’s not your fault.</p>
        <p>
          The deck is stacked against you. In fact, it’s stacked against so many Americans out there struggling with their weight. Here are the 4
          major factors we found plaguing people trying to lose weight:
        </p>
      </div>
      <Link href="https://app.mdexam.com/intake/firstname" target={'_blank'} className="mt-12">
        <button className="w-[340px] h-[58px] rounded-[7px] bg-primary hover:bg-secondary">
          <span className="text-white text-[16px] font-bold">Start Your Journey</span>
        </button>
      </Link>
    </Container>
  )
}

export default Introduction
