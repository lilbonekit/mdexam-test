import type { FC } from 'react'
import { useState } from 'react'
import Container from '@/components/container'

const FAQ: FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number>(0)

  return (
    <Container className="mt-20 text-center">
      <div className="mt-4 relative py-4 w-full">
        <div className="absolute top-0 w-full h-[1.5px] bg-black" />
        <p className="text-xl font-bold">FAQ</p>
        <div className="absolute bottom-0 w-full h-[2px] bg-black" />
      </div>
      <div className="mt-20 flex flex-col gap-5">
        <button
          type="button"
          className={`w-full h-[52px] rounded-[7px] ${activeFAQ === 0 ? 'bg-secondary' : 'bg-primary'} hover:bg-secondary`}
          onClick={() => setActiveFAQ(0)}
        >
          <span className={`${activeFAQ === 0 ? 'text-black' : 'text-white'} text-[20px] font-bold`}>How much do the programs cost?</span>
        </button>
        <div className={`bg-[#E7E9EB] p-5 rounded-[7px] ${activeFAQ === 0 ? 'animate-toggle-visible visible' : 'hidden'}`}>
          <p className="text-[18px]">
            Depending on what treatment plan you get put on, you’ll be charged a monthly fee that covers your access to prescriptions, exercise plans,
            nutrition plans, and ongoing accountability from our medical providers to make sure you’re making progress.
          </p>
          <br />
          <p className="text-[18px]">
            These programs can range anywhere from $200-$300 a month, but to get a specific cost on your personalized treatment plan, fill out the
            online form and talk to one of our providers today!
          </p>
        </div>
        <button
          type="button"
          className={`w-full h-[52px] rounded-[7px] ${activeFAQ === 1 ? 'bg-secondary' : 'bg-primary'} hover:bg-secondary`}
          onClick={() => setActiveFAQ(1)}
        >
          <span className={`${activeFAQ === 1 ? 'text-black' : 'text-white'} text-[20px] font-bold`}>
            Can I still lose weight if I have comlications?
          </span>
        </button>
        <div className={`bg-[#E7E9EB] p-5 rounded-[7px] ${activeFAQ === 1 ? 'animate-toggle-visible visible' : 'hidden'}`}>
          <p className="text-[18px]">
            With our specialized plans, everyone can lose weight regardless of complications. If you have a physical? That’s taken into account. If
            you have dietary restrictions? We can work with that. If there are issues with your hormones? We know what to do.
          </p>
          <br />
          <p className="text-[18px]">
            Bottom line: if you’re medically the right fit for our programs and you’re dedicated to following through on this, we’ll create something
            for you that will help you lose weight and keep it off.
          </p>
        </div>
        <button
          type="button"
          className={`w-full h-[52px] rounded-[7px] ${activeFAQ === 2 ? 'bg-secondary' : 'bg-primary'} hover:bg-secondary`}
          onClick={() => setActiveFAQ(2)}
        >
          <span className={`${activeFAQ === 2 ? 'text-black' : 'text-white'} text-[20px] font-bold`}>
            Do I really need a medical solution to lose weight?
          </span>
        </button>
        <div className={`bg-[#E7E9EB] p-5 rounded-[7px] ${activeFAQ === 2 ? 'animate-toggle-visible visible' : 'hidden'}`}>
          <p className="text-[18px]">
            We can show you the science, and we can offer up our best medical advice, but at the end of the day, that’s really up to you to decide.
          </p>
          <br />
          <p className="text-[18px]">
            If you feel like you’ve tried everything and really put in the effort to make a change in your life but couldn’t get the results you
            wanted, then this is for you.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default FAQ
