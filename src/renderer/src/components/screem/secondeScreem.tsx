import { JSX } from 'react'
import Container from '../card'
import { mainClass } from '@renderer/assets/style/base'
import useClock from '@renderer/hook/clock'

function Secondescreem(): JSX.Element {
  const [date, time] = useClock()
  return (
    <>
      <Container className={mainClass.headerItems} style={{ margin: 10 }}>
        <div className="text-uppercase" style={{ height: 50 }}>
          {date} {time} T01 <br />
          TERMINAL FERMÉ
        </div>
      </Container>
    </>
  )
}

export default Secondescreem
