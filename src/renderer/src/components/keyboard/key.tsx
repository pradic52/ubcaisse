import { JSX } from 'react'
import { Button } from 'react-bootstrap'

interface KeyProps {
  label: string
  onClick?: () => void
  className?: string
  icon?: React.ReactNode
}

function Key({ label, onClick, className, icon }: KeyProps): JSX.Element {
  return (
    <Button
      className={`text-wrap bg-info ${className}`}
      style={{ width: '6rem', height: '5rem' }}
      onClick={onClick}
    >
      {icon}
      {label}
    </Button>
  )
}

export default Key
