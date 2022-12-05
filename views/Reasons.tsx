import type { FC, ReactElement } from 'react'
import Container from '@/components/container'

const Reasons: FC = () => {
  const NumberPad = (number: number): ReactElement => (
    <div className="relative flex-none w-[53px]">
      <div className="w-[1.5px] h-full bg-black mx-auto" />
      <div className="absolute top-0 w-full h-[53px] rounded-full bg-primary flex justify-center items-center">
        <p className="text-white text-[1.4955rem] leading-[2.4375rem] font-bold">{number}</p>
      </div>
    </div>
  )

  return (
    <Container className="mt-20 flex flex-col">
      <p className="text-secondary text-center text-[16px] font-bold">REASONS</p>
      <p className="mt-4 text-center text-xl font-bold">Here are the 4 major factors we found plaguing people trying to lose weight:</p>
      <div className="mt-12">
        <div className="flex gap-8 w-full">
          {NumberPad(1)}
          <div className="mb-20 grow flex flex-col gap-8">
            <p className="mt-3 text-lg font-bold">A Lack of Know-How</p>
            <p>The least complicated but arguably the biggest issue is a lack of knowledge about proper eating, exercise, and self-care habits.</p>
            <p>While the internet is a powerful tool, far too much weight loss information is either incomplete or just flat-out wrong.</p>
            <div className="relative flex flex-col items-center">
              <div className="absolute top-0 w-[279px] h-[1px] bg-black" />
              <div className="py-6 flex flex-col gap-8">
                <p className="text-center italic">
                  This trainer on social media swears that tons of cardio and HIIT training will melt off the weight.
                </p>
                <p className="text-center italic">
                  That “nutritionist” says getting into ketosis is <span className="font-bold">the only way</span> to shed pounds fast.
                </p>
                <p className="text-center italic">
                  Next thing you know, another fitness influencer is telling you to ditch carbs because “that’s how you got fat in the first place.”
                </p>
              </div>
              <div className="absolute bottom-0 w-[279px] h-[0.5px] bg-black" />
            </div>
            <p>We take in all this nonsense and are almost forced to do one of two things:</p>
            <p>Test it out for ourselves (which usually ends in frustration when it’s unsuccessful)</p>
            <p>Or,</p>
            <p>Ignore the noise and follow the same patterns that continue to make us so unhappy with our bodies.</p>
            <p>Curious which tactics actually work? It’s the ones best suited for your lifestyle.</p>
            <p>Anyone can lose weight with gimmicks—the problem is they’re unsustainable.</p>
            <p>Once you’re done aggressively training or cutting out entire food groups, you’ll experience the snapback effect.</p>
            <p>And since nothing was done to change your everyday habits, it only makes sense you’ll gain back the weight.</p>
            <p>
              What works is what fits into your life: <span className="font-bold">something that makes sense for you to do all the time.</span>
            </p>
            <p>
              So if you think you can keep up intermittent fasting or keto for the rest of your life? Go for it, but know you’ll have to stay
              consistent.
            </p>
            <p>
              Enjoy running and have the drive for it? Go do some cardio; no one’s stopping you. Just know from now on, you have to identify as a
              runner to continue making it work.
            </p>
            <p>
              Taking care of your body is a lifelong process of self-discovery. It requires figuring out what agrees with YOUR body and YOUR life
              <span className="italic">—not what works for the influencers on social media.</span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 w-full">
          {NumberPad(2)}
          <div className="mb-24 grow flex flex-col gap-8">
            <p className="mt-3 text-lg font-bold">A Lack of Time</p>
            <p>There’s no surprise why so many people can’t find the time to take care of themselves.</p>
            <p>Most of our clients, like yourself, have families.</p>
            <p>They have children to take care of, relationships with spouses to tend to, and on top of that, work full-time jobs.</p>
            <p>
              Even if we save time traveling to our jobs, working from home can be stressful and might even make self-care harder—because now you have
              to be “On” <span className="font-bold">all the time.</span>
            </p>
            <ul className="list-outside list-disc pl-10">
              <li>
                <span>Team meetings and messages come in at all hours of the day.</span>
              </li>
              <li>
                <span>When you’re away from the computer, chores around the house need to get done</span>
              </li>
              <li>
                <span>The kids always need something, whether its food, help with homework, or simply just attention</span>
              </li>
            </ul>
            <p>Just like that, it’s dark out, and you’ve skipped a meal or two despite everyone else eating.</p>
            <p>So how do you stop your stomach from growling?</p>
            <p>Even though you promised you’d stick to cooking at home, preparing a full meal feels like too much work for your tired body.</p>
            <p>You could go for the leftovers, but you feel like the food everyone else eats will just make you fat.</p>
            <p>Against your better judgment, you open up the UberEats app hoping to find SOMETHING healthy.</p>
            <p>But it’s late. There aren’t many options left open.</p>
            <p>And no matter how often you tell yourself “NO,” your finger scrolls down to your favorite restaurant.</p>
            <p>You select your usual order, and as you click “Complete,” you mutter to yourself the same thing you always do:</p>
            <p className="italic font-bold">“This is THE LAST TIME.”</p>
            <p>
              As you wait for it to arrive, you find yourself leaning against the kitchen counter, shamefully shoveling handfuls of dry cereal into
              your mouth straight from the box.
            </p>
            <p>
              Once you finally crawl into bed disappointed with your choices, you’re overfed, exhausted, and barely made it out of the house for fresh
              air.
            </p>
            <p>
              What would be better is having simple and healthy meals planned out ahead of time so you don’t fall victim to snacking at odd hours of
              the day.
            </p>
            <p>
              And you know it can be a simple fix, but only if you have the right information and tools that set you up for success—
              <span className="font-bold">not failure.</span>
            </p>
          </div>
        </div>
        <div className="flex gap-8 w-full">
          {NumberPad(3)}
          <div className="mb-16 grow flex flex-col gap-8">
            <p className="mt-3 text-lg font-bold">Hormonal Imbalances</p>
            <p>Remember when I said it wasn’t your fault that you’re struggling to lose weight?</p>
            <p>In this case, it REALLY isn’t your fault.</p>
            <p>Our bodies are complicated systems that can become fussy as we age.</p>
            <p>And sometimes, medical struggles can pour into our everyday life, making it hard to lose weight.</p>
            <p>
              This can be more obvious with physical issues like joint/knee pain, a bad back, or recovering from surgery—but it can also show up in
              ways we can’t see.
            </p>
            <p>Did you know nearly half of women surveyed ages 30-60 have suffered from hormonal imbalances?</p>
            <p>
              That might not seem significant, but an imbalance in our chemistry can make or break any progress,{' '}
              <span className="font-bold">even if you’re doing all the right things.</span>
            </p>
            <p>Without really digging into the science behind it, our bodies think we’re fighting for our lives when our hormones are out of wack.</p>
            <p>On the outside, we may be living our lives, and everything might feel fine—but inside, your body is in Code Red.</p>
            <p>These imbalances can be caused by something as simple as lack of sleep or poor stress management.</p>
            <p>Still, it’s also possible that something more nuanced needs medical attention.</p>
            <p>
              All the alarms are firing, and when you start trying to lose weight by decreasing your food intake and exercising, your body thinks it’s
              going to die.
            </p>
            <p>It’s used to a certain amount of food coming in, and when that doesn’t happen, it panics and enters starvation mode.</p>
            <p>
              Once there, your body tries to convert all food into fat so you can live long enough to fix the problem: but it never gets fixed because
              nothing is actually wrong.
            </p>
            <p>
              This is why it’s so important to ensure we get tested and check for hormonal imbalances because on your own, there aren’t many ways you
              can figure out what’s going on.
            </p>
          </div>
        </div>
        <div className="flex gap-8 w-full">
          {NumberPad(4)}
          <div className="mb-8 grow flex flex-col gap-8">
            <p className="mt-3 text-lg font-bold">Lifestyle Changes</p>
            <p>We’ve touched on this a little earlier, but lifestyle changes are a significant part of weight gain terrorizing Americans.</p>
            <p>
              Maybe it was the pandemic that shifted your whole life.
              <br />
              Maybe it was a serious injury that required surgery.
              <br />
              Maybe it was having a child or even getting to the age where menopause kicks in.
            </p>
            <p>Whatever it is, that big change happened.</p>
            <p>Priorities shifted, other responsibilities were added on, and taking care of your body just looked different.</p>
            <p>It’s possible you didn’t even change how you take care of yourself, but what you were doing isn’t working anymore.</p>
            <p>
              That adds a new layer of stress and exhaustion to the equation, which makes it even easier to lean on something like food for comfort.
            </p>
            <p>
              And if you’re like most of our patients, you’re well acquainted with the feeling of frustration and hopelessness when—despite your best
              efforts—the scale <span className="italic">still</span> doesn’t move.
            </p>
            <p>When that happens, those chips you’ve been avoiding all week look more tempting.</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Reasons
