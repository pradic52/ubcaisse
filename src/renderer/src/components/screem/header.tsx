import { mainClass } from '@renderer/assets/style/base'
import Container from '../card'
import { JSX } from 'react'
import useClock from '@renderer/hook/clock'

export default function Header(): JSX.Element {
  const [date, time] = useClock()
  const numTerminal = 1
  const numCaissier = 4554878
  return (
    <div className={mainClass.envContainer}>
      <Container className={mainClass.headerItems}>TERM. N*{numTerminal}</Container>
      <Container className={mainClass.headerItems}>CAISSIER {numCaissier}</Container>
      <Container className={mainClass.headerItems}>{date}</Container>
      <Container className={mainClass.headerItems}>{time}</Container>
    </div>
  )
}
