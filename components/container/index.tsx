import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  className?: string
}

const Container: FC<IProps> = props => {
  const { children, className } = props
  return <div className={`max-w-primary mx-auto text-base ${className}`}>{children}</div>
}

Container.defaultProps = {
  className: '',
}

export default Container
