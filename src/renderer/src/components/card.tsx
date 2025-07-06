import { mainClass } from '@renderer/assets/style/base'
import { JSX } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

function Container({ className = '', children, ...rest }: ContainerProps): JSX.Element {
  return (
    <div className={`${mainClass.container} ${className}`} {...rest}>
      {children}
    </div>
  )
}

export default Container
