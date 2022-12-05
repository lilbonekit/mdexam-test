import type { FC } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/container'

const Footer: FC = () => {
  return (
    <footer className="mt-36 bg-[rgb(232,232,232)] py-5">
      <Container className="flex flex-col items-center gap-20">
        <Script src="https://static.legitscript.com/seals/11058625.js"></Script>
        <Link href="https://legitscript.com" target={'_blank'} title="Verify LegitScript Approval">
          <Image src="https://static.legitscript.com/seals/11058625.png" alt="no img" width={140} height={120} />
        </Link>
        <p className="text-center text-[#37465A] text-[0.8669rem] leading-[1.375rem]">
          MD Exam Copyright © 2022. All rights reserved.
          <br />
          <Link href="https://mdexam.com/terms" target={'_blank'}>
            <span className="hover:underline">Terms and Conditions.</span>
          </Link>{' '}
          <Link href="https://mdexam.com/privacy" target={'_blank'}>
            <span className="hover:underline">Privacy Policy.</span>
          </Link>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
