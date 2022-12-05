import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  className?: string
}

const Container: FC<IProps> = props => {
  const { children, className } = props
  return <div className={`max-w-full px-5 lg:max-w-lg lg:px-0 mx-auto text-base ${className}`}>{children}</div>
}

Container.defaultProps = {
  className: '',
}

export default Container
