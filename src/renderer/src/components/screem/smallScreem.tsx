import { JSX } from 'react'
import Container from '../card'
import { mainClass } from '@renderer/assets/style/base'
import useClock from '@renderer/hook/clock'

function Smallscreem(): JSX.Element {
  const [date, time] = useClock()
  return (
    <>
      <Container className={mainClass.headerItems}>
        <div className="text-uppercase" style={{ height: 40 }}>
          {date} {time} T01 <br />
          TERMINAL FERMÉ
        </div>
      </Container>
    </>
  )
}

export default Smallscreem
