import { JSX } from 'react'
import { Button } from 'react-bootstrap'

interface KeyProps {
  label: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
  dimensions?: {
    width?: string
    height?: string
  }
}

function Key({
  label,
  onClick,
  className,
  icon,
  dimensions = { width: '100px', height: '54px' }
}: KeyProps): JSX.Element {
  return (
    <Button
      className={`text-wrap bg-info ${className} `}
      style={{ ...dimensions, boxSizing: 'border-box', padding: 0, margin: 0, fontSize: '0.9rem' }}
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  )
}

export default Key
