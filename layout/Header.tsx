import type { FC } from 'react'
import Image from 'next/image'
import Container from '@/components/container'

const Header: FC = () => {
  return (
    <header>
      <Container className="flex justify-center py-10 md:py-[8.5px]">
        <Image src="/assets/images/logo.svg" alt="no logo" width={268} height={67} priority />
      </Container>
    </header>
  )
}

export default Header
