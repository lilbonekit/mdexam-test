import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/container'

const Process: FC = () => {
  return (
    <Container className="mt-20">
      <p className="text-center text-secondary text-[16px] font-bold">PROCESS</p>
      <div className="mt-4 relative py-4 w-full">
        <div className="absolute top-0 w-full h-[1.5px] bg-black" />
        <p className="text-center text-[30px] leading-10 sm:text-xl font-bold">Here&apos;s How It Works</p>
        <div className="absolute bottom-0 w-full h-[2px] bg-black" />
      </div>
      <div className="mt-16 flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-14">
          <Image
            className="order-1 flex-none rounded-[0.4375rem] object-cover object-center lg:w-[449px] lg:h-[228px] w-[360px] h-[228px]"
            src="/assets/images/worker1.png"
            alt="no img"
            width={449}
            height={228}
          />
          <div className="order-2 grow flex flex-col gap-5 items-center md:items-start">
            <p className="text-lg text-center font-bold">1. Fill Out The Online Form</p>
            <p>
              We’re about efficiency here. So the quickest way to help you lose weight is by getting crystal clear in our online form. Filling that
              out in detail will make it easier for us to prescribe the right treatment plan for you.
            </p>
            <div className="h-[1px] w-[225px] bg-black" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-14">
          <Image
            className="order-1 md:order-2 flex-none rounded-[0.4375rem] object-cover object-center lg:w-[449px] lg:h-[228px] w-[360px] h-[228px]"
            src="/assets/images/worker2.png"
            alt="no img"
            width={449}
            height={228}
          />
          <div className="order-2 md:order-1 grow flex flex-col gap-5 items-center md:items-start">
            <p className="text-lg text-center font-bold">2. Book A Consultation</p>
            <p>When your form is approved, you’ll be able to book a time with one of our medical providers almost instantly.</p>
            <p>(If you’ve got a busy schedule, no problem! We’re flexible and can get you on a call within the same week.)</p>
            <div className="h-[1px] w-[225px] bg-black" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-14">
          <Image
            className="order-1 flex-none rounded-[0.4375rem] object-cover object-center lg:w-[449px] lg:h-[228px] w-[360px] h-[228px]"
            src="/assets/images/worker3.png"
            alt="no img"
            width={449}
            height={228}
          />
          <div className="order-2 grow flex flex-col gap-5 items-center md:items-start">
            <p className="text-lg text-center font-bold">3. Meet With Your Provider</p>
            <p>
              From the comfort of your home, you’ll chat with a provider who’ll review your medical history and answer any questions about weight loss
              or our programs.
            </p>
            <p>
              Once you’re prescribed your treatment plan, you’ll get a customized program for weight loss created for your specific needs, which
              includes an easy-to-follow exercise schedule through PhysiTrack
            </p>
            <div className="h-[1px] w-[225px] bg-black" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-14">
          <Image
            className="order-1 md:order-2 flex-none rounded-[0.4375rem] object-cover object-center lg:w-[449px] lg:h-[228px] w-[360px] h-[228px]"
            src="/assets/images/worker4.png"
            alt="no img"
            width={449}
            height={228}
          />
          <div className="order-2 md:order-1 grow flex flex-col gap-5 items-center md:items-start">
            <p className="text-lg text-center font-bold">4. Medication Delivered To Your Door</p>
            <p>
              You can get your Rx mailed straight from one of our partner pharmacies, so you never have to worry about picking up your prescription on
              time.
            </p>
            <div className="h-[1px] w-[225px] bg-black" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-14">
          <Image
            className="order-1 flex-none rounded-[0.4375rem] object-cover object-center lg:w-[449px] lg:h-[228px] w-[360px] h-[228px]"
            src="/assets/images/worker5.png"
            alt="no img"
            width={449}
            height={228}
          />
          <div className="order-2 grow flex flex-col gap-5 items-center md:items-start">
            <p className="text-lg text-center font-bold">5. Start your journey</p>
            <p>
              Your Rx, exercise plan, nutrition tracker, and wellness check-ins combine to help you lose weight and keep it off for good. With all the
              right tools in your hands, this process will not only be manageable, but it’ll be enjoyable once you start seeing results.
            </p>
            <div className="h-[1px] w-[225px] bg-black" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-14">
          <Image
            className="order-1 md:order-2 flex-none rounded-[0.4375rem] object-cover object-center lg:w-[449px] lg:h-[228px] w-[360px] h-[228px]"
            src="/assets/images/worker6.png"
            alt="no img"
            width={449}
            height={228}
          />
          <div className="order-2 md:order-1 grow flex flex-col gap-5 items-center md:items-start">
            <p className="text-lg text-center font-bold">6. Check in with your provider</p>
            <p>Congratulations! You’re well on your way to your dream body and lifestyle.</p>
            <p>
              Along the way, you’ll be able to chat with your provider whenever you have questions or have something you’re struggling with. The
              accountability is in place for you to use—so take advantage of it!
            </p>
            <p>Check-in with them at least once a month to ensure you’re on the right track.</p>
            <p className="italic">Think you’re the right fit?</p>
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <p className="text-center text-lg font-bold">Fill out the form to get started today!</p>
        <Link href="https://app.mdexam.com/intake/firstname" target={'_blank'} className="mt-10">
          <button className="w-[329px] h-[58px] rounded-[7px] bg-primary hover:bg-secondary">
            <span className="text-white text-[16px] font-bold">Click here to get started</span>
          </button>
        </Link>
      </div>
    </Container>
  )
}

export default Process
