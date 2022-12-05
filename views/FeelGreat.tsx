import type { FC } from 'react'
import Image from 'next/image'
import Container from '@/components/container'

const FeelGreat: FC = () => {
  return (
    <Container className="mt-20">
      <div className="relative py-4">
        <div className="absolute top-0 w-full h-[1.5px] bg-black" />
        <p className="text-center text-xl font-bold">
          Welcome To MD Exam
          <br />
          Your Chance To Finally Lose Weight & Feel Great
        </p>
        <div className="absolute bottom-0 w-full h-[2px] bg-black" />
      </div>
      <div className="mt-10">
        <div className="flex gap-3">
          <Image className="flex-none rounded-lg" src="/assets/images/feelgreat.png" alt="no img" width={401} height={282} />
          <div className="grow flex flex-col gap-6">
            <p>
              MD Exam is a telehealth service specializing in safe and effective medical weight loss tactics that cater to your specific body type.
            </p>
            <p>
              While some doctors will send you to get gastric bypass or stomach stapling, we recognize those are expensive and quick fixes that don’t
              give you the tools to succeed after the fact.
            </p>
            <p>
              An AGA (American Gastroenterological Association) study found that <span className="font-bold">59% of people regained 20% or more</span>{' '}
              of the weight they originally lost after surgery.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <p>
            And for a procedure that averages anywhere from $20,000-$25,000, we’d hardly call it a successful method. As medical professionals, we
            understand our job doesn’t just stop at diagnoses or prescriptions.
          </p>
          <p>When it comes to medical intervention, we need to be there with you for the long run:</p>
          <ul className="list-outside list-disc pl-10">
            <li>
              <span>Guiding you through the ups and downs.</span>
            </li>
            <li>
              <span>Making adjustments along the way.</span>
            </li>
            <li>
              <span>Ensuring you have all the necessary tools to succeed on your own.</span>
            </li>
          </ul>
          <p>
            Unfortunately, most medical practices are far too pricey to be sustainable for 90% of Americans
            <span className="font-bold">—which is why MD Exam works so well.</span>
          </p>
          <p>As a telehealth service, everything is done online.</p>
          <p>We’ve streamlined everything we possibly could, so you’re only paying for the help you’re getting from our medical professionals.</p>
          <p className="font-bold">And because of that, we can offer quality care at a practical price.</p>
          <p>We’ve helped over______patients who’ve struggled for years to drop weight but, for some reason, couldn’t keep it off.</p>
          <p>
            Using proven medical weight loss methods and the accountability needed to make lasting change in the first 6-12 months, we’ve seen
            a_______ success rate that’s unmatched.{' '}
          </p>
        </div>
      </div>
    </Container>
  )
}

export default FeelGreat
