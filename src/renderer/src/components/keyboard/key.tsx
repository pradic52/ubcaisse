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
    <Button className={`text-break bg-info ${className}`} onClick={onClick}>
      {icon}
      {label}
    </Button>
  )
}

export default Key
